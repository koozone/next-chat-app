import axios from 'axios';
import {useState, useEffect} from 'react';

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
			<NavBar />
			<ul>
				{roomList.map((item) => (
					<li key={item.roomId}>{item.roomName}</li>
				))}
			</ul>
		</div>
	);
}
