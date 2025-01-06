import { config } from '../config/config.js'; // 설정 정보를 가져오기 위해 config 모듈 임포트
import { PACKET_TYPE, TOTAL_LENGTH } from '../constants/header.js'; // 패킷 헤더 상수 임포트
import { packetParser } from '../utils/parser/packetParser.js';

// 데이터 수신 시 처리하는 함수
export const onData = (socket) => async (data) => {
  // 기존 버퍼에 새로 수신된 데이터를 추가
  socket.buffer = Buffer.concat([socket.buffer, data]); // 소켓의 버퍼에 수신된 데이터 추가

  // 패킷의 총 헤더 길이 (패킷 길이 정보 + 타입 정보)
  const totalHeaderLength = config.packet.totalLength + config.packet.typeLength; // 헤더의 총 길이 계산

  // 버퍼에 최소한 전체 헤더가 있을 때만 패킷을 처리
  while (socket.buffer.length >= totalHeaderLength) { // 버퍼의 길이가 헤더 길이 이상일 때
    // 1. 패킷 길이 정보 수신 (4바이트)
    const length = socket.buffer.readUInt32BE(0); // 버퍼의 첫 4바이트에서 패킷 길이 읽기
    // 2. 패킷 타입 정보 수신 (1바이트)
    const packetType = socket.buffer.readUInt8(config.packet.totalLength); // 패킷 타입 읽기
    // 3. 패킷 전체 길이 확인 후 데이터 수신
    if (socket.buffer.length >= length) { // 버퍼의 길이가 패킷 길이 이상일 때
      // 패킷 데이터를 자르고 버퍼에서 제거
      const packet = socket.buffer.slice(totalHeaderLength, length); // 패킷 데이터 추출
      socket.buffer = socket.buffer.slice(length); // 버퍼에서 패킷 데이터 제거

      console.log(`length: ${length}`); // 패킷 길이 출력
      console.log(`packetType: ${packetType}`); // 패킷 타입 출력
      console.log(packet); // 패킷 데이터 출력

      switch(packetType){
        case PACKET_TYPE.PING:
          break;
        case PACKET_TYPE.NORMAL:
          const {handlerId,userId,payload,sequence}= packetParser(packet);

          console.log(`handlerId: ${handlerId}`);
          console.log(`userId: ${userId}`);
          console.log(`payload: ${payload}`);
          console.log(`sequence: ${sequence}`);
      }

    } else {
      // 아직 전체 패킷이 도착하지 않음
      break; // 루프 종료
    }
  }
};