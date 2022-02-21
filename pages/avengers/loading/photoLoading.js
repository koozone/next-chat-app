import classNames from 'classnames';
import {forwardRef} from 'react';

export const PhotoLoading = forwardRef((props, ref) => {
	const {className} = props;

	return (
		<div ref={ref} className={classNames(className, 'w-[100px] h-[50px] bg-red-400')}>
			<span>Loading...</span>
		</div>
	);
});

export default PhotoLoading;
