import Header from '../component/header';
import axios from 'axios';
import {UseDog} from './../hook/useDog';
import {UseUnsplash} from './../hook/useUnsplash';
import {Button} from '../component/ui';
import {CardItem} from '../component/cardItem';

export default function test() {
	const [imageList, imageRefresh] = UseDog({count: 1 + Math.round(Math.random() * 2)});
	// const [imageList, imageRefresh] = UseUnsplash();

	return (
		<div>
			<Header />

			<div className="flex flex-row">
				{imageList?.map((item, index) => (
					// <img
					// 	key={index}
					// 	src={item}
					// 	className="inline-block w-[200px] h-[200px] object-cover rounded-md m-5 hover:ring-4 hover:ring-white"
					// />
					<CardItem key={index} src={item.src} name={item.name} className="m-3" />
				))}
			</div>
			<Button deco="" onClick={imageRefresh}>
				<i className="bx bx-refresh bx-fw" />
				<span>Refresh ({imageList.length})</span>
			</Button>
		</div>
	);
}
