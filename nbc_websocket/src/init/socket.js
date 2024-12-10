import { Server as SocketIO } from 'socket.io';
import {BattleHandlingmapping,handlerMapping} from '../handler/handlerMapping.js';
import {handleEvent} from '../handler/handle.event.js';

const initSocket = (server) => {
  const io = new SocketIO();
  io.attach(server);

  io.on('connection',(socket)=>{
    console.log('Connection connected');
    console.log(`id:${socket.id}`);

    socket.on('event',(data)=>handleEvent(io,socket,data,handlerMapping));
    socket.on('BattleEvent',(data)=>handleEvent(io,socket,data,BattleHandlingmapping));

    socket.on('disconnect',()=>{
        console.log('Disconnected!');
        console.log(`id: ${socket.id}`);
    });
  });
};

export default initSocket;