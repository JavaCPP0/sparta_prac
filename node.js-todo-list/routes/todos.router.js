// /routes/todos.router.js

import express from 'express';
import joi from 'joi';
import Todo from '../schemas/todo.schema.js';

const router = express.Router();

// 1. 'value' 데이터는 필수적으로 존재 해야한다.
// 2. 'value' 데이터는 문자열타입 이어야한다.
// 3. 'value' 데이터는 최소1글자 이상이어야한다.
// 4. 'value' 데이터는 최대 50글자 이하여야 한다.
// 5.유효성 검사에 실패했을 대, 에러가 발생해야한다.
//깃테스트 주석
const createdTodoSchema = joi.object({
    value: joi.string().min(1).max(50).required(),
});

router.post('/todos', async (req, res, next) => {
    //데이터를 조회하는동안 멈춰야 하니까 async
    //1. 클라이언트로부터 받은 value데이터 가져오기
    // const { value } = req.body;
    try {
        const validation = await createdTodoSchema.validateAsync(req.body);

        const { value } = validation;

        //1-5. 만약, 클라이언트가 value데이터를 전달하지 않았을 때, 클라이언트에게 에러 메시지 전달
        if (!value) {
            return res.status(400).json({
                errorMessage: '해야할 일 데이터가 존재하지 않습니다.',
            });
        }
        // Todo모델을 사용해, MongoDB에서 'order' 값이 가장 높은 '해야할 일'을 찾습니다.
        //2. 해당하는 마지막 order데이터 조회
        // findOne = 1개의 데이터만 조회
        // sort = 정렬한다. ->어떤 컬름을 기준으로?order
        //exec를 안붙이면 앞에 코드가 promise로 동작하지 않는다=>await 사용불가
        const todoMaxOrder = await Todo.findOne().sort('-order').exec();

        // 'order' 값이 가장 높은 도큐멘트의 1을 추가하거나 없다면, 1을 할당합니다.
        const order = todoMaxOrder ? todoMaxOrder.order + 1 : 1;

        // Todo모델을 이용해, 새로운 '해야할 일'을 생성합니다.
        const todo = new Todo({ value, order });

        // 생성한 '해야할 일'을 MongoDB에 저장합니다.
        await todo.save();

        return res.status(201).json({ todo });
    } catch (error) {
        //Router 다음에 있는 에러 처리 미들웨어를 실행한다.
        next(error);
    }
});

//해야할 일 목록 조회 API

router.get('/todos', async (req, res) => {
    //1.해야할일 목록 조회
    const todos = await Todo.find().sort('-order').exec();

    //2.조회 결과 클라이언트에 반환
    return res.status(200).json({ todos });
});

//해야할 일 순서 변경, 완료/해제,내용변경 API
router.patch('/todos/:todoId', async (req, res) => {
    const { todoId } = req.params; //req.params는 URL에 정의된 모든 경로 변수들을 키-값 쌍으로 포함하는 객체 ex)GET /todos/12345로 요청하면 req.params = { todoId: '12345' }
    const { order, done, value } = req.body;

    //현재 나의 order가 무엇인지 알아야 한다.
    const currentTodo = await Todo.findById(todoId).exec(); //변경하려는 _id를 조회해서 저장
    if (!currentTodo) {
        return res
            .status(404)
            .json({ errorMessage: ' 존재하지 않는 해야할 일 입니다.' });
    }

    if (order) {
        const targetTodo = await Todo.findOne({ order }).exec(); //내가 바꾸고싶은 번호의 데이터를 조회
        if (targetTodo) {
            targetTodo.order = currentTodo.order; //기존에 있던것과 바꾸려는것의 순서 변경
            await targetTodo.save(); //저장
        }

        currentTodo.order = order; //변경하려던 데이터의 번호를 변경
    }
    if (done !== undefined) {
        currentTodo.doneAt = done ? new Date() : null; //done이 true면 지금 날짜 할당. 아니면 null
    }

    if (value) {
        currentTodo.value = value; //메모바꾸기
    }

    await currentTodo.save();

    return res.status(200).json({}); //200 상태메세지 반환
});

//할일 삭제

router.delete('/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId).exec(); //삭제하려는 데이터 조회

    if (!todo) {
        return res
            .status(400)
            .json({ errorMessage: '존재하지 않는 해야할 일 정보입니다.' });
    }

    await Todo.deleteOne({ _id: todoId }); //그 id에 해당하는 데티어 삭제

    return res.status(200).json({});
});

export default router;
