//배열

//1.생성
//1-1. 기본 생성
let fruits=["사과","바나나","오렌지"];

//1-2. 크기 지정
let number = new Array(5);

console.log(fruits.length);
console.log(number.length);

//2.요소 접근
console.log(fruits[0]);

//3.배열 메소드
//3-1.push
console.log(fruits);
fruits.push("배");
console.log("push후=>",fruits);

//3-2.pop
fruits.pop();
console.log("pop후=>",fruits);

//3-3. shift
fruits.shift();
console.log("shift후=>",fruits);

//3-4. unshift
fruits.unshift("포도");
console.log("unshift후=>",fruits);

//3-5. splice
fruits.splice(1,1,"자몽"); //1번 인덱스부터 1개를 지우고 자몽을 넣어라
console.log("splice후=>",fruits);

//3-6.slice
let slicedFruits = fruits.slice(1,2); //1번인덱스부터 2번인덱스전까지잘라서 배열을 반환해줘
console.log("slice로 가져온 배열=>",slicedFruits);