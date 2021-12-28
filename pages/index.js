import NavBar from './component/navBar';
import Header from './component/header';

export default function Index() {
	return (
		// <div className="flex flex-col justify-center items-center min-h-screen py-2">
		<div className="relative h-screen">
			<Header />
			{/* <NavBar /> */}
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<label>
				<input type="checkbox" defaultChecked /> Browser default
			</label>
			<label>
				<input type="checkbox" className="accent-pink-500" defaultChecked />
				Customized
			</label>

			<div className="h-[300px] overflow-auto bg-pink-300">
				<div className="py-32 text-center h-[2000px]">
					<div className="text-4xl font-extrabold">Tailwind Test</div>
				</div>
			</div>

			<footer className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-x-6">
				<button className="btn btn--secondary">Decline</button>
				<button className="btn btn--primary">Accept</button>
			</footer>
		</div>
	);
}
