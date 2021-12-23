const roomList = [
	{roomId: 'r1', roomName: 'room_1', title: 'API Integration', category: 'Engineering'},
	{roomId: 'r2', roomName: 'room_2', title: 'New Benefits Plan', category: 'Human Resources'},
	{roomId: 'r3', roomName: 'room_3', title: 'Onboarding Emails', category: 'Customer Success'},
];

export default function handler(req, res) {
	res.status(200).json(roomList);
}
