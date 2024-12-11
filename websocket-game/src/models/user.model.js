
const users=[]; //DB가 아닌 인메모리로 저장

export const addUser = (user)=>{ //registerhandler에서 user를 {uuid : userUUID,socketId:socket.id}형태의 객체로 받음
    users.push(user)
};

export const removeUser =(socketId) =>{
    const index =users.findIndex((user)=> user.socketId ===socketId);
    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

export const getUser = ()=>{
    return users;
}