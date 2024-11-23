//객체
//key- value pair
//하나의 변수에 여러개의 값을 넣을 수 있다

//1.객체 생성 방법
//1-1. 기본적인 객체 생성 방법
let person = {
    name:"홍길동",
    age:30,
    gender: "남자",
    key: true
}

//1-2.생성자 함수를 이용한 객체 생성 방법
function Person(name,age,gender){
    this.name = name;
    this.age=age;
    this.gender=gender;
}

let person1 = new Person("홍길동", 30, "남자");

//2.접근하는 방법
console.log("1",person.name);
console.log("2",person.age);
console.log("3",person.gender);

//3.객체 메소드 (객체가 가진 여러가지 기능: Object.~~)
//3-1.Object.key() : key를 가져오는 메소드

let keys = Object.keys(person);
console.log("keys =>", keys);

let values = Object.values(person);
console.log("values =>", values);

//3-3. entries
//key와 value를 묶어서 배열로 만든 배열(2차원 배열)
let entries = Object.entries(person);
console.log("person =>", person);

//3-4.assign
//객체 복사
let newPerson ={};
Object.assign(newPerson,person,{age:31});
console.log("newPersopn =>",newPerson);

// 3-5.객체 비교
//객체의 크기는 상당히 크다->메모리에 저장할 때 별도의 공간에 저장

//person2 별도 공간에 대한 주소
let person2 = {
    name:"홍길동",
    age:30,
    gender: "남자",
    key: true
}

//person3 별도 공간에 대한 주소
let person3 = {
    name:"홍길동",
    age:30,
    gender: "남자",
    key: true
}

console.log(person2===person3);//둘은 다름

//stringify는 문자열화 시키다. 문자열로 바꿔서 비교하니 같다
console.log((JSON.stringify(person2)) === (JSON.stringify(person3))); //true


let person4 = {
    name:"홍길동",
    age:30,
}


let person5 = {
    gender: "남자",
}

//...:spread operator
let perfectMan={...person4,...person5};
console.log(perfectMan);