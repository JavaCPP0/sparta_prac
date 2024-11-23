// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase());
num = 100; // 치명적인 단점이 있어요. 변수를 변경하기 너무 쉽다=>악용가능
console.log(increase());
console.log(increase());

//보완점
//카운트상태(num변수의 값)
//increase함수가 호출되기 전까진 변경x

//이를 위해 count 상태는 increase 함수만이 변경

//전역변수 num이 문제다. 지역변수로 바꾼다고 되나?