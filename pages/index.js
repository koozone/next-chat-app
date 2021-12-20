import NavBar from './component/navBar';

export default function Index() {
	return (
		<>
			<NavBar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<label>
				<input type="checkbox" defaultChecked /> Browser default
			</label>
			<label>
				<input type="checkbox" className="accent-pink-500" defaultChecked /> Customized
			</label>

			<div className="py-32 text-center">
				<div className="text-4xl font-extrabold">Tailwind Test</div>
			</div>
		</>
	);
}
