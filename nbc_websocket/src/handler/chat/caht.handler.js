export const handleChat = (socket,data)=>{
    return {id:socket.id,msg:data.message};
};