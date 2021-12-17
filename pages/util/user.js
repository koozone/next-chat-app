const {DateTime} = require('luxon');

const userList = [];

const getUserList = (roomName) => {
	return userList.filter((item) => item.roomName == roomName);
};

const getUser = (id) => {
	return userList.find((item) => item.id == id);
};

const joinUser = ({id, nickName, roomName}) => {
	const user = {
		id,
		nickName,
		roomName,
		date: DateTime.now().toMillis(),
	};

	userList.push(user);

	return user;
};

const leaveUser = (id) => {
	const index = userList.findIndex((item) => item.id == id);

	return index > -1 ? userList.splice(index, 1)[0] : null;
};

module.exports = {
	getUserList,
	getUser,
	joinUser,
	leaveUser,
};
