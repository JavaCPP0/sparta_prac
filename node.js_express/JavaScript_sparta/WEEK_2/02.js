// 단축 속성명 : property shorthand

const name = "nbc";
const age ="30";

const obj ={
    name: name, //키와 밸류의 이름이 같으면 생략가능 만약 age: age로 같았다면 const obj ={name,age}; 같이 배열처럼 쓸 수 있음
    newAge: age
}

//전개 구문 = spread operator
//destructing과 함게 가장 많이 사용되는 es6문법중 하나

let arr=[1,2,3];
console.log(arr); //[1,2,3]
console.log(...arr); //1 2 3

let newArr=[...arr,4];
console.log(arr); //[1,2,3]
console.log(newArr); //[1,2,3,4]

//객체
let user = {
    name:'nbc',
    age: 30,
}

let user2={...user};//spread해서 user2에 넣는다.

console.log(user); //{ name: 'nbc', age: 30 }
console.log(user2); //{ name: 'nbc', age: 30 }

//나머지 매개변수(rest parameter)
function exampleFunc(a,b,c,...args) {
    console.log(a,b,c); //1 2 3
    console.log(...args); //4 5 6 7
    console.log(args); //[ 4, 5, 6, 7 ]
}

exampleFunc(1,2,3,4,5,6,7);

//템플릿 리터럴(Template Literal)
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
        My name is Javascript!!

        Good to see you!
    `) //`(백틱)으로 멀티문자열 표현 가능