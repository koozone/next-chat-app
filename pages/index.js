import NavBar from './component/navBar';
import Header from './component/header';

export default function Index() {
	return (
		// <div className="flex flex-col justify-center items-center min-h-screen py-2">
		<div>
			<Header />
			<NavBar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<label>
				<input type="checkbox" defaultChecked /> Browser default
			</label>
			<label>
				<input
					type="checkbox"
					className="accent-pink-500"
					defaultChecked
				/>
				Customized
			</label>

			<div className="py-32 text-center h-[2000px]">
				<div className="text-4xl font-extrabold">Tailwind Test</div>
			</div>
		</div>
	);
}
