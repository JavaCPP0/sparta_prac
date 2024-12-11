import express from 'express';
import { createServer } from 'http'; //WebSocket과 같은 실시간 통신을 지원하기 위해 Express를 http.Server로 확장하려는 의도
import initSocket from './init/socket.js';
import { loadGameAssets } from './init/assets.js';

const app = express();
const server = createServer(app); //Express 애플리케이션(app)을 감싸는 HTTP 서버를 생성합니다.  WebSocket 같은 실시간 통신을 추가로 사용가능

const PORT = 3000;
//미들웨어들

//'public' 디렉터리에 있는 정적 파일(HTML, CSS, JS 등)을 클라이언트가 요청할 수 있도록 합니다.
//예를 들어, /style.css를 요청하면 public/style.css 파일이 제공됩니다.
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
initSocket(server);//initSocket 함수에 server 객체를 전달하여 WebSocket을 초기화합니다.이 코드로 WebSocket 통신을 서버에 통합합니다.

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  //이 곳에서 파일 읽음
  try {
    const assets = await loadGameAssets();
    console.log(assets);
    console.log('Assets loaded successfully');
  } catch (e) {
    console.error('Failed to load game assets:', e);
  }
});
