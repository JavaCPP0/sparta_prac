import { getGameAssets } from "../init/assets.js";
import { setStage,getStage } from "../models/stage.model.js";
import { getUser,removeUser } from "../models/user.model.js"
import handlerMappings from "./handlerMapping.js";

export const handleDisconnect = (socket,uuid)=>{
    removeUser(socket.id);
    console.log(`User disconnected: ${socket.id}`);
    console.log('Current users: ',getUser())
}


export const handleConnection=(socket,uuid)=>{
    console.log(`New user connected!: ${uuid} with socket ID ${socket.id}`);
    console.log('Current users: ',getUser());

    const {stages}=getGameAssets();
    //stages 배열에서 0번재 = 첫번째 스테이지
    setStage(uuid,stages.data[0].id);
    console.log('Stage: ',getStage(uuid));

    socket.emit('connection',{uuid});
}

export const handlerEvent =(io,socket,data)=>{
    if(!CLIENT_VERSION.includes(data.clientVersion)){
        socket.emit('reponse',{status:'fail',message: "Client version mismatch"});
        return 
    }

    const handler = handlerMappings[data.handlerId];
    if(!handler){
        socket.emit('response',{status:'fail',message: "Handler not found"})
        return; 
    }

    const response = handler(data.userId,data.payload);
}