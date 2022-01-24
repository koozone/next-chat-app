import Header from '../component/header';
import {Chip} from '../component/temp_ds';
import {Basket} from '../component/ui_ds4';

const Card = (props) => {
	const {} = props;

	return (
		<div className="px-8 mt-10">
			<div className="mx-auto lg:w-3/5 lg:h-auto lg:flex lg:flex-row overflow-hidden rounded-lg">
				<img className="object-cover h-48 w-full lg:h-auto lg:w-2/5" src={`https://source.unsplash.com/random?count=${Math.round(Math.random() * 9999)}`} alt="" />
				<div className="bg-white p-8">
					<h2 className="text-gray-700 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit!</h2>
					<p className="text-sm text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut harum praesentium eveniet impedit nobis explicabo commodi odio sapiente obcaecati ex eius autem, deserunt nisi facere error in veniam ea cumque.</p>
					<div className="flex items-center mt-8">
						<div className="flex items-center">
							<img className="object-cover h-10 w-10 rounded-full" src={`https://source.unsplash.com/random?count=${Math.round(Math.random() * 9999)}`} alt="" />
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
		</div>
	);
};

export default function test() {
	return (
		<div>
			<Header />

			<div className="px-8 mt-10">
				<div className="mx-auto lg:w-3/5 lg:h-auto lg:flex lg:flex-row">
					<img
						className="object-cover rounded-tl-xl rounded-tr-xl h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-xl lg:rounded-tr-none"
						src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt=""
					/>
					<div className="bg-white p-8 rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tr-xl">
						<h2 className="text-gray-700 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit!</h2>
						<p className="text-sm text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut harum praesentium eveniet impedit nobis explicabo commodi odio sapiente obcaecati ex eius autem, deserunt nisi facere error in veniam ea cumque.</p>
						<div className="flex items-center mt-8">
							<div className="flex items-center">
								<img className="object-cover h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" />
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
			</div>

			<Card />
		</div>
	);
}
