import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';
import { onConnection } from './events/onConnection.js';

const PORT = 5555; // 서버가 사용할 포트 설정

// TCP 서버 생성
const server = net.createServer(onConnection); // 클라이언트 연결 시 onConnection 함수 호출

// 서버 초기화 및 실행
initServer()
  .then(() => {
    server.listen(config.server.port, config.server.host, () => { // 서버 리스닝 시작
      console.log(`서버가 ${config.server.host}:${config.server.port}에서 실행 중입니다.`); // 서버 실행 메시지 출력
      console.log(server.address()); // 서버 주소 출력
    });
  })
  .catch((e) => {
    console.error(e); // 오류 발생 시 메시지 출력
    process.exit(1); // 프로세스 종료
  });