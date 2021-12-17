// const next = require('next');
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const formatMessage = require('./pages/util/message');
const {getRoomList, getRoom} = require('./pages/util/room');
const {getUserList, getUser, joinUser, leaveUser} = require('./pages/util/user');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

// const dev = process.env.NODE_ENV != 'production';
// const nextApp = next({dev});
// const nextHandler = nextApp.getRequestHandler();
const serverName = 'KooBot';
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'pages')));

// 소켓 연결 성공 이벤트
io.on('connection', (socket) => {
	// 채팅방 접속 도착 이벤트
	socket.on('joinRoom', ({nickName, roomName}) => {
		const user = joinUser({id: socket.id, nickName, roomName});

		socket.join(user.roomName);

		// 서버 메세지 전송 (현재 사용자에게)
		socket.emit('message', formatMessage(serverName, `${nickName}님 반갑습니다.`));
		// 서버 메세지 전송 (채팅방의 다른 사용자들에게)
		socket.broadcast.to(user.roomName).emit('message', formatMessage(serverName, `${nickName}님이 입장하셨습니다.`));

		io.to(user.roomName).emit('updateRoom', {
			roomName: user.roomName,
			userList: getUserList(user.roomName),
		});
	});

	// 사용자 메세지 도착 이벤트
	socket.on('chatMessage', ({nickName, message}) => {
		const user = getUser(socket.id);

		// 사용자 메세지 전송 (채팅방의 모든 사용자들에게)
		io.to(user.roomName).emit('message', formatMessage(nickName, message));
	});

	// 소켓 연결 해제 이벤트
	socket.on('disconnect', () => {
		const user = leaveUser(socket.id);

		if (user) {
			// 서버 메세지 전송 (채팅방의 모든 사용자들에게)
			io.to(user.roomName).emit('message', formatMessage(serverName, `${user.nickName}님이 퇴장하셨습니다.`));

			io.to(user.roomName).emit('updateRoom', {
				roomName: user.roomName,
				userList: getUserList(user.roomName),
			});
		}
	});
});

// nextApp.prepare().then(() => {
// 	app.get('*', (req, res) => {
// 		return nextHandler(req, res);
// 	});

app.get('/roomList', (req, res) => {
	res.json(getRoomList());
});

server.listen(port, (err) => {
	if (err) throw err;
	console.log(`Ready on http://localhost:${port}`);
});
// });
