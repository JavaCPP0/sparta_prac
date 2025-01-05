import { HANDLER_ID,TOTAL_LENGTH_SIZE } from "./constant.js";

export const readHeader = (buffer)=>{
    //빅인디안(순서대로 읽음) , 리틀인디안(역순으로 읽음)
    return {
        length:  buffer.readUInt32BE(0), //빅인디안방식으로 32비트만큼 읽음 offset은 0 (0번쨰부터 읽음),handlerId
        handlerId: buffer.readUInt16BE(TOTAL_LENGTH_SIZE)
    };
};

export const writeHeader =(length,handlerId) =>{
    const headerSize = TOTAL_LENGTH_SIZE + HANDLER_ID; //6
    const buffer = Buffer.alloc(headerSize);
    buffer.writeUInt32BE(length + headerSize,0);
    buffer.writeUInt16BE(handlerId,TOTAL_LENGTH_SIZE);

    return buffer;
};