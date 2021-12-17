const {DateTime} = require('luxon');

const roomList = [
	{roomId: 'r1', roomName: 'room_1'},
	{roomId: 'r2', roomName: 'room_2'},
	{roomId: 'r3', roomName: 'room_3'},
];

const getRoomList = () => {
	return roomList;
};

// const getRoom = (id) => {
// 	return roomList.find((item) => item.id == id);
// };

// const makeRoom = ({id, nickName, roomName}) => {
// 	const user = {
// 		id,
// 		nickName,
// 		roomName,
// 		date: DateTime.now().toMillis(),
// 	};

// 	roomList.push(user);

// 	return user;
// };

// const remeveRoom = (id) => {
// 	const index = roomList.findIndex((item) => item.id == id);

// 	return index > -1 ? roomList.splice(index, 1)[0] : null;
// };

module.exports = {
	getRoomList,
	// getRoom,
};
