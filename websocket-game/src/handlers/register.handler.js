import { addUser } from "../models/user.model.js";
import {v4 as uuidv4} from 'uuid';
import { handleConnection, handleDisconnect,handlerEvent } from "./helper.js";


const registerHandler = (io)=>{
    io.on('connection',(socket)=>{//클라이언트가 WebSocket 서버에 연결될 때 발생하는 connection 이벤트를 처리합니다.
                                        //각 연결마다 새로운 socket 객체가 생성되며, 이를 통해 클라이언트와 통신할 수 있습니다.
        const userUUID=uuidv4();//고유 사용자 UUID를 생성
        addUser({uuid : userUUID,socketId:socket.id});

        handleConnection(socket,userUUID);

        socket.on('event',(data)=>handlerEvent(io,socket,data)); //event'라는 이름의 이벤트가 발생했을 때 호출
        //접속해제시 이벤트
        socket.on('disconnect',(socket)=>handleDisconnect(socket,userUUID)); //연결을 해제할 때 발생하는 disconnect 이벤트를 처리 / on은 이벤트리스너
    })
}

export default registerHandler