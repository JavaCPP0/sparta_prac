import net from 'net';
import { writeHeader, readHeader } from './utils.js';
import { HANDLER_ID, TOTAL_LENGTH_SIZE } from './constant.js';

// 서버에 연결할 호스트와 포트
const HOST = 'localhost';
const PORT = 5555;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  const message = 'Hello';
  //const message = 'V'.repeat(1024);
  const buffer = Buffer.from(message); //메세지 버퍼객체로 생성

  const header = writeHeader(buffer.length, 11);
  const packet = Buffer.concat([header, buffer]);
  client.write(packet); //서버로 데이터 보내기
});

client.on('data', (data) => {
  const buffer = Buffer.from(data);
  const { length, handlerId } = readHeader(buffer);
  console.log(`handlerId: ${handlerId}`);
  console.log(`length: ${length}`);

  const headerSize = TOTAL_LENGTH_SIZE + HANDLER_ID; //6
  const message = buffer.slice(headerSize);

  console.log(`server 에게 받은 메세지:${message}`);

});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});
