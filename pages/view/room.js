import axios from 'axios';
import {useState, useEffect} from 'react';
import Box from '../component/box';
import BoxItem, {BoxItem2} from '../component/boxItem';
import Header, {Header2} from '../component/header';

import NavBar from '../component/navBar';

export default function chat() {
	const [roomList, setRoomList] = useState([]);

	useEffect(() => {
		// axios('http://localhost:3000/roomList')
		axios('/api/room')
			.then((res) => {
				console.log(res.data);
				setRoomList(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Header2 />
			<NavBar />
			<Box>
				{roomList.map((item, index) => (
					// <li key={item.roomId}>{item.roomName}</li>
					<li key={index}>
						<BoxItem item={item} />
					</li>
				))}
				<li>
					<BoxItem2></BoxItem2>
				</li>
			</Box>
		</div>
	);
}
