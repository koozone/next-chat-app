import classNames from 'classnames';
import {cloneElement, useCallback, useEffect, useRef} from 'react';
import PhotoLoading from '../loading/photoLoading';
import {fakeFetch} from '../thor';

export const PhotoList = (props) => {
	const {
		item,
		data: [state, runState],
	} = props;

	const updateEntry = useCallback(async () => {
		if (state.json.length > 20) return;

		runState.change('isLoading', true);

		await fakeFetch();

		runState.change('isLoading', false);
		runState.change('json', [
			...state.json,
			...[
				{value: '', name: ''},
				{value: '', name: ''},
				{value: '', name: ''},
				{value: '', name: ''},
				{value: '', name: ''},
			],
		]);
	});

	const listRef = useRef(null);
	const loadingRef = useRef(null);

	useEffect(() => {
		if (!listRef || !loadingRef) return;

		const option = {
			root: listRef.current,
			rootMargin: '0px 0px 0px 0px',
			threshold: 1,
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// observer.unobserve(entry.target);

					updateEntry();
				}
			});
		}, option);

		observer.observe(loadingRef.current);

		return () => observer.disconnect();
	}, [listRef, loadingRef, state.json]);

	return (
		<div className="bg-gray-100 py-8 px-8 h-full overflow-auto" ref={listRef}>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{state.json.map((value, index) =>
					cloneElement(item, {
						key: index,
						number: index,
					})
				)}
				<PhotoLoading
					className={classNames({
						'opacity-0': !state.isLoading,
						'opacity-100': state.isLoading,
					})}
					ref={loadingRef}
				/>
			</div>
		</div>
	);
};

export default PhotoList;
