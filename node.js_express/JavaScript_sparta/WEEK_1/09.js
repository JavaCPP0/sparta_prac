//for ~ in 문
//객체의 속성을  출력하는 문법
let person = {
    name:"Jhon",
    age:30,
    gender: "male",
};

//person['key']
for(let key in person) {
    console.log(key + ":" + person[key]);
}