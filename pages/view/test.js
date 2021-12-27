import * as header from '../component/header';
import axios from 'axios';
import {useDog} from './../hook/useDog';
import {useUnsplash} from './../hook/useUnsplash';

export default function test() {
	const [imageList, imageRefresh] = useDog({count: 1 + Math.round(Math.random() * 2)});
	// const [imageList, imageRefresh] = useUnsplash();

	return (
		<div>
			<header.Header1 />
			<header.Header2 />
			<header.Header3 />

			{imageList?.map((item, index) => (
				<img key={index} src={item} className="inline-block w-[200px] h-[200px] object-cover rounded-md m-5 hover:ring-4 hover:ring-white" />
			))}
			<button onClick={imageRefresh}>Refresh({imageList.length})</button>
		</div>
	);
}
