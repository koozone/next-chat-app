const Imsi = () => {
	return (
		<span className="text-red-500">
			<span className="text-red-500">hello</span>
			<span className="text-blue-500">hihi</span>
		</span>
	);
};

const getDefaultElement = () => {
	return <div className={`-z-20 top-0 left-0 peer-disabled:opacity-50 peer-disabled:pointer-events-none`}>thank</div>;
};

export const Label = (props) => {
	return props ? getDefaultElement(props) : Imsi(props);
};

export default function test() {
	const item = Label();
	console.log('item', item.props.className, item.props.children);

	return <div>aaaa {item} bbbb</div>;
}
