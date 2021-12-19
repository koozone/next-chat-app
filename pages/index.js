import TopBar from './component/topBar';

export default function Index() {
	return (
		<>
			<TopBar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<label>
				<input type="checkbox" checked /> Browser default
			</label>
			<label>
				<input type="checkbox" className="accent-pink-500" checked /> Customized
			</label>
		</>
	);
}
