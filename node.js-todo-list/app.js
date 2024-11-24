// /app.js
//git테스트주석
import express from 'express';
import connect from './schemas/index.js';
import TodosRouter from './routes/todos.router.js';
import errorHandlerMiddleware from './middlewares/error-handler.middleware.js';

const app = express();
const PORT = 3000;

connect();

// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json()); //미들웨어1
app.use(express.urlencoded({ extended: true })); //미들웨어2

// static Middleware, express.static()을 사용하여 정적 파일을 제공합니다.
app.use(express.static('./assets')); //미들웨어3

app.use((req, res, next) => {
    //미들웨어4
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
});

const router = express.Router(); //라우터 생성

router.get('/', (req, res) => {
    return res.json({ message: 'Hi!' }); //아무 요청에 Hi반환
});

// /api 주소로 접근하였을 때, router와 TodosRouter로 클라이언트의 요청이 전달됩니다.
app.use('/api', [router, TodosRouter]); //미들웨어 5

app.use(errorHandlerMiddleware); //에러처리 미들웨어 등록

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
});
