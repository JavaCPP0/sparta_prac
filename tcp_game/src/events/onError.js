import { removeUser } from "../session/user.session.js";
import CustomError from "../utils/error/customError.js";
import { ErrorCodes } from "../utils/error/errorCodes.js";
import { handlerError } from "../utils/error/errorHandler.js";

export const onError=(socket)=>(data)=>{
    console.error('Socket error:', err);
    handlerError(socket,new CustomError(500,`소켓 오류 ${err.message}`));

    //세션에서 유저 삭제
    removeUser(socket);
}