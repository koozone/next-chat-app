import classNames from 'classnames';

export const PhotoSection = (props) => {
	const {children, className} = props;

	return <div className={classNames(className, 'bg-blue-100 max-w-5xl mx-auto h-screen p-10')}>{children}</div>;
};

export default PhotoSection;
