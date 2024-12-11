import { getUser,removeUser } from "../models/user.model.js";
import handlerMappings from "./handlerMapping.js";
import {CLIENT_VERSION} from '../constants.js';
import { createStage } from '../models/stage.model.js';

export const handleDisconnect = (socket,uuid)=>{
    removeUser(socket.id);
    console.log(`User disconnected: ${socket.id}`);
    console.log('Current users: ',getUser())
}


export const handleConnection = (socket, userUUID) => {
    console.log(`New user connected: ${userUUID} with socket ID ${socket.id}`);
    console.log('Current users:', getUser());
  
    // 스테이지 빈 배열 생성
    createStage(userUUID);
    
    socket.emit('connection', { uuid: userUUID });//서버가 클라이언트에게 "연결 완료" 이벤트를 전송합니다.전달된 데이터는 사용자의 UUID입니다.
  };

export const handlerEvent =(io,socket,data)=>{//클라이언트로부터 이벤트가 발생할 때 호출되는 함수입니다.
    if(!CLIENT_VERSION.includes(data.clientVersion)){//data.clientVersion이 허용된 버전 목록(CLIENT_VERSION)에 포함되지 않으면 실패 응답을 클라이언트로 보냅니다.
        socket.emit('reponse',{status:'fail',message: "Client version mismatch"});
        return 
    }

    const handler = handlerMappings[data.handlerId]; //data.handlerId를 기반으로 적절한 핸들러를 찾습니다.
    if(!handler){
        socket.emit('response',{status:'fail',message: "Handler not found"})
        return; 
    }

    const response = handler(data.userId,data.payload);//핸들러를 호출하고 결과를 response에 저장합니다.

    //response.broadcast가 true인 경우, 서버는 모든 클라이언트에게 응답을 브로드캐스트합니다.
    //그렇지 않은 경우, 요청한 소켓에만 응답을 보냅니다.
    if(response.broadcast){
        io.emit('response','broadcast');
        return;
    }

    socket.emit('response',response);
}