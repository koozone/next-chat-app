export const Box = ({children}) => {
	return (
		<div className="text-gray-400 text-sm font-extralight">
			<ul className="bg-gray-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">{children}</ul>
		</div>
	);
};

export default Box;
