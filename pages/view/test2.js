import Header from '../component/header';
import {Chip} from '../component/temp_ds';
import {Basket} from '../component/ui_ds5';

const getImage = () => {
	return `https://source.unsplash.com/collection/190727/400x300?random=${Math.round(Math.random() * 9999)}`;
};

const Avatar = (props) => {
	return (
		<div className="inline-flex flex-col items-center space-y-1">
			<div className="relative p-1 bg-gradient-to-tr from-yellow-400 to-rose-600 rounded-full">
				<a className="block p-1 bg-white rounded-full overflow-hidden" href="#">
					<img className="object-cover h-12 w-12 md:h-20 md:w-20 rounded-full transition-transform hover:scale-125 hover:rotate-6" src={getImage()} alt="" />
				</a>
				<button className="absolute bottom-0 right-0 bg-blue-500 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white flex justify-center items-center hover:bg-blue-700 text-white text-xl">
					<i className="bx bx-plus" />
				</button>
			</div>
			<a className="text-gray-800 text-sm font-semibold hidden md:block" href="#">
				Andrew
			</a>
		</div>
	);
};

const Card = (props) => {
	return (
		<div className="md:flex md:flex-row overflow-hidden rounded-2xl">
			<img className="bg-gray-50 object-cover h-48 w-full md:h-auto md:w-2/5" src={getImage()} alt="" />
			<div className="bg-white p-8 md:w-3/5">
				<h2 className="text-gray-700 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit!</h2>
				<p className="text-sm text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut harum praesentium eveniet impedit nobis explicabo commodi odio sapiente obcaecati ex eius autem, deserunt nisi facere error in veniam ea cumque.</p>
				<div className="flex items-center mt-8">
					<div className="flex items-center">
						<img className="object-cover h-10 w-10 rounded-full" src={getImage()} alt="" />
						<div className="ml-4">
							<p className="text-gray-800 text-sm font-semibold">Michelle Appleton</p>
							<p className="text-gray-600 text-sm">28 Jun 2020</p>
						</div>
					</div>
					<div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex justify-center items-center">
						<i className="bx bxs-share text-gray-500"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function test() {
	return (
		<div>
			<Header />

			<ul className="px-8 my-5 md:my-10 flex justify-center space-x-5">
				{'***'.split('').map((item, index) => (
					<li key={index} className="inline-block">
						<Avatar />
					</li>
				))}
			</ul>

			<ul className="px-8 my-5 md:my-10 mx-auto max-w-screen-md space-y-5">
				{'**********'.split('').map((item, index) => (
					<li key={index}>
						<Card />
					</li>
				))}
			</ul>
		</div>
	);
}
