//렉시컬 스코프
//JS 엔진은 함수를 어디서 '호출' 했는지가 아니라
//어디에 '정의'했는지에 따라서 스코프(상위 스코프)를 결정

//외부 렉시컬 환경에 대한 참조값 =>outer
//함수 정의가 평가되는 시점

const x = 1;

// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

function innerFunc() {
  console.log(x); // 1 innerFunc가 비록 outerFunc안에 있지만 정의은 밖에서 됐기 때문에 x=1을 바라본다
}

outerFunc();