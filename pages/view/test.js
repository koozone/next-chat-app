import Header, {Header1, Header2, Header3} from '../component/header';
import axios from 'axios';
import {useDog} from './../hook/useDog';
import {useUnsplash} from './../hook/useUnsplash';
import {Button} from '../component/button';
import {CardItem} from '../component/cardItem';

export default function test() {
	const [imageList, imageRefresh] = useDog({count: 1 + Math.round(Math.random() * 2)});
	// const [imageList, imageRefresh] = useUnsplash();

	return (
		<div>
			<Header />

			<Header1 />
			<Header2 />
			<Header3 />

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
			<Button type="success" onClick={imageRefresh}>
				<i className="bx bx-refresh bx-fw" />
				<span>Refresh ({imageList.length})</span>
			</Button>
		</div>
	);
}
