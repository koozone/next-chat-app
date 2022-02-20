import {getRandomSrc} from '../thor';

export const CardItem = (props) => {
	const {number} = props;
	const src = getRandomSrc(number);

	return (
		<div className="md:flex md:flex-row overflow-hidden rounded-2xl">
			<img className="bg-gray-50 object-cover h-48 w-full md:h-auto md:w-2/5" src={src} alt="" />
			<div className="bg-gray-100 p-8 md:w-3/5">
				<h2 className="text-gray-700 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit!</h2>
				<p className="text-sm text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut harum praesentium eveniet impedit nobis explicabo commodi odio sapiente obcaecati ex eius autem, deserunt nisi facere error in veniam ea cumque.</p>
				<div className="flex items-center mt-8">
					<div className="flex items-center">
						<img className="object-cover h-10 w-10 rounded-full" src={src} alt="" />
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

export default CardItem;
