//화살표 함수
//ES6 신 문법

//기존의 함수 선언
function add(x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y
}

//1-2. 한 줄로 
let arrowFunc02 = (x, y) => x + y;

//조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.");
// }

//and 조건(&&)
(x > 0) && console.log("x는 양수입니다.");

//or 조건(||)
//삼항 연산자와 단축평가

let y;// y는 undefinde
let z = y ||20; //y가 undefinde라면 20을 넣어라

console.log(z);
