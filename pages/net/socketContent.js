import React from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('localhost:3000', {
	cors: {origin: '*'},
});

export const SocketContext = React.createContext(socket);
