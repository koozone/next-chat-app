import {getRandomSrc} from '../thor';

export const PhotoRoundItem = (props) => {
	const {number} = props;
	const src = getRandomSrc(number);

	return (
		<figure className="space-y-2">
			<img className="bg-gray-200 object-cover w-full aspect-square rounded-full" src={src} alt="" />
			<figcaption className="text-sm">
				<div className="text-slate-800 font-semibold">IMG_4985.HEIC</div>
				<div className="text-slate-500">3.9 MB</div>
			</figcaption>
		</figure>
	);
};

export const PhotoItem = (props) => {
	const {number} = props;
	const src = getRandomSrc(number);

	return (
		<figure className="space-y-2">
			<img className="object-cover w-full h-[200px] rounded-lg" src={src} alt="" />
			<figcaption className="text-sm">
				<div className="text-slate-800 font-semibold">IMG_4985.HEIC</div>
				<div className="text-slate-500">3.9 MB</div>
			</figcaption>
		</figure>
	);
};

export default PhotoItem;
