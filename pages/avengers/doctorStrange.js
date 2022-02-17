import classNames from 'classnames';

export const SectionA = (props) => {
	const {children, className} = props;

	return (
		<section className={classNames('px-4 py-8', className)}>
			<div className="max-w-[70rem] mx-auto space-y-8">{children}</div>
		</section>
	);
};

// export const SectionB = (props) => {
// 	const {children, className} = props;

// 	return (
// 		<section className={classNames('px-8 py-4', className)}>
// 			<div className="w-fit mx-auto flex space-x-3">{children}</div>
// 		</section>
// 	);
// };

// export const PocketA = (props) => {
// 	const {children} = props;

// 	return <div className="max-w-[50rem] mx-auto">{children}</div>;
// };

// export const PocketB = (props) => {
// 	const {children} = props;

// 	return <div className="w-fit mx-auto flex space-x-3">{children}</div>;
// };
