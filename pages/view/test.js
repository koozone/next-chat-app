import * as header from '../component/header';
import axios from 'axios';
import {useDog} from './../hook/useDog';
import {useUnsplash} from './../hook/useUnsplash';

export default function test() {
	// const [dogData, dogRefresh] = useDog();
	const [unsplashData, unsplashRefresh] = useUnsplash();
	console.log(unsplashData);

	return (
		<div>
			<header.Header1 />
			<header.Header2 />
			<header.Header3 />
			{unsplashData?.map((item, index) => (
				<img key={index} src={item.urls.thumb} />
			))}

			<input type="text"></input>

			<button
				onClick={() => {
					unsplashRefresh({query: 'face', count: Math.round(Math.random() * 5) + 1});
				}}
			>
				Refresh
			</button>
		</div>
	);
}
