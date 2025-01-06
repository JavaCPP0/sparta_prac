import { onData } from './onData.js'; // 데이터 수신 처리 함수 임포트
import { onEnd } from './onEnd.js'; // 연결 종료 처리 함수 임포트
import { onError } from './onError.js'; // 오류 처리 함수 임포트

// 클라이언트 연결 시 처리하는 함수
export const onConnection = (socket) => {
  console.log(`Client connected from: ${socket.remoteAddress}:${socket.remotePort}`); // 클라이언트 연결 정보 출력

  // 빈 버퍼를 생성 => 각 클라이언트마다 고유한 버퍼를 유지시키기 위해
  socket.buffer = Buffer.alloc(0); // 소켓에 빈 버퍼 할당

  socket.on('data', onData(socket)); // 데이터 수신 시 onData 함수 호출
  socket.on('end', onEnd(socket)); // 연결 종료 시 onEnd 함수 호출
  socket.on('error', onError(socket)); // 오류 발생 시 onError 함수 호출
};