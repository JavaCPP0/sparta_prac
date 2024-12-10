export const handleMatch = (socket,data)=>{
    return {id:socket.id,msg:data.message};
};