// 구조분해할당 : destructuring(de + structure +ing)
//de = not
//structure = 구조
//배열이나, 객체의 속성

//1 배열의 경우
let [value1, value2] = [1, "new"];
console.log('1', value1);
console.log('2', value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;

console.log(a);
console.log(b);
console.log(c);
//d에 값이 없다면 undefined가 들어감

//2 객체인 경우
let user = {
    name: "nbc",
    age: 30,
};

let { name, age } = {
    name: "nbc",
    age: 30,
};

console.log("name =>",name); //string
console.log("age =>",age); //number


//새로운 이름으로 할당

let{
    name: newName,
    age: newAge
}=user

console.log("newName =>",newName);
console.log("newAge =>",newAge);

let{name2,age2,birthday} = user;
console.log(name2);
console.log(age2);
console.log(birthday);


