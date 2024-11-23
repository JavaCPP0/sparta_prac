const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x); //x를 사용해서 실핼할때 중첩함수가 외부함수보다 더 오래 유지된다면 이미 종료된 외부함수의 변수를 여전히 참조할 수 있다.
  };
  return inner;
}

//outer함수를 '실행'해서, innerFunc에 답는다.
//outer함수의 return부분을 innerFunc에 담는다는 얘기
const innerFunc = outer();
//여기서는 outer함수의 실행컨텍스트는 날아간다
innerFunc();