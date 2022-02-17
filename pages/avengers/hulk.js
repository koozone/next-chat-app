export const TitleMenu = (props) => {
	const {title} = props;

	return (
		<div className="flex items-center whitespace-nowrap">
			<h2 className="font-medium text-gray-900 truncate">{title}</h2>
			<div className="flex-none flex items-center ml-auto pl-4 sm:pl-6">
				<span>icon</span>
			</div>
		</div>
	);
};
