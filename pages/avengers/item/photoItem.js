import {getRandomSrc} from '../thor';

export const PhotoItem = (props) => {
	const {number} = props;
	const src = getRandomSrc(number);

	return (
		<figure className="space-y-2">
			<img className="object-cover w-[280px] h-[200px] rounded-lg" src={src} alt="" />
			<figcaption className="text-sm">
				<div className="text-slate-800 font-semibold">IMG_4985.HEIC</div>
				<div className="text-slate-500">3.9 MB</div>
			</figcaption>
		</figure>
	);
};

export default PhotoItem;
