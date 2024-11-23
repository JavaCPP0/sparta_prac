//함수 = function(기능)
//input, output

//1.함수 선언문
// function add (매개변수){
//     //함수 내부에서 실행할 로직
// }

//두개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x,y) {

    let result;
    result = x+y;

    return result     
} 



//2.함수 표현식
let add2 = function(x,y) {
    return x+y;
}

//함수를 호출 ==사용
//함수명() ->add(x,y)
console.log(add(1,4));

let FunctionResult = add(3,4);
console.log(FunctionResult);