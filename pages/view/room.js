import axios from 'axios';
import {useState, useEffect} from 'react';
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
			<ul>
				{roomList.map((item) => (
					<li key={item.roomId}>{item.roomName}</li>
				))}
			</ul>
		</div>
	);
}
