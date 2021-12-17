const roomList = [
	{roomId: 'r1', roomName: 'room_1'},
	{roomId: 'r2', roomName: 'room_2'},
	{roomId: 'r3', roomName: 'room_3'},
];

export default function handler(req, res) {
	res.status(200).json(roomList);
}
