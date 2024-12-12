// WebSocket 연결 관련 사용자 관리를 위한 핸들러 모듈

// 필요한 모듈들을 가져옵니다
import { addUser } from "../models/user.model.js";
import {v4 as uuidv4} from 'uuid';
import { handleConnection, handleDisconnect,handlerEvent } from "./helper.js";

// WebSocket 서버(io)를 매개변수로 받아 연결 처리를 담당하는 메인 핸들러 함수
const registerHandler = (io)=>{
    // 새로운 클라이언트 연결이 발생할 때마다 실행되는 이벤트 리스너
    io.on('connection',(socket)=>{
        // 각 사용자를 구분하기 위한 고유 UUID 생성
        const userUUID=uuidv4();
        
        // 새로운 사용자 정보를 시스템에 등록
        addUser({uuid : userUUID,socketId:socket.id});

        // 연결된 사용자에 대한 초기 설정 처리
        handleConnection(socket,userUUID);

        // 클라이언트로부터 'event' 메시지를 받았을 때 실행되는 이벤트 핸들러
        socket.on('event',(data)=>handlerEvent(io,socket,data));
        
        // 클라이언트의 연결이 종료될 때 실행되는 이벤트 핸들러
        socket.on('disconnect',(socket)=>handleDisconnect(socket,userUUID));
    })
}

export default registerHandler