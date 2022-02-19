import {forwardRef, useEffect, useRef} from 'react';
import {SectionA} from '../avengers/doctorStrange';
import {CardItem, PostItem} from '../avengers/hulk';
import {AreaItem} from '../avengers/spiderMan';
import {fakeFetch, getRandomSrc} from '../avengers/thor';
import {UseData} from '../avengers/vision';

const Loading = forwardRef((props, ref) => {
	return (
		<div ref={ref} className="w-[100px] h-[100px] bg-red-400">
			<span>안녕</span>
		</div>
	);
});

export const Main = () => {
	const [stateData, runStateData] = UseData({count: 5});
	const loadingRef = useRef(null);

	useEffect(() => {
		fakeFetch(3000).then(() => {
			console.log('fakeFetch Call');
		});
	}, []);

	useEffect(() => {
		if (loadingRef) {
			const observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							// observer.unobserve(entry.target);

							runStateData.change('count', stateData.count + 1);
						}
					});
				},
				{
					root: null,
					rootMargin: '0px 0px 30px 0px',
					threshold: 1,
				}
			);

			observer.observe(loadingRef.current);

			return () => observer.disconnect();
		}
	}, [loadingRef, stateData.count]);

	return (
		<div className="py-4 px-8">
			<div className="flex-col space-y-3">
				{[...Array(stateData.count)].map((item, index) => (
					// <CardItem key={index} number={index} />
					<PostItem key={index} number={index} />
				))}
				<Loading ref={loadingRef} />
			</div>
		</div>
	);
};

export default Main;
