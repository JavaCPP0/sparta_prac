export const handleEvent =(io,socket,{handlerId,data},mapping)=>{
    const handler = mapping[handlerId];

    if(!handler){
        socket.emit('response',{status: 'fail',message:'Handles not found'});
        return;
    }

    console.log({handlerId,data});

    const response = handler(socket,data);
    io.emit('response',{status:'success',handlerId, data:response});
};