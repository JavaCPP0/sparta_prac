//형 변환시 +하면 문자열로 -*/는 숫자가 우선시된다.
//연산자(+,-,*,/,%)

//1.더하기 연산자
console.log(1+1); //2
console.log(1+"1"); //11

//2.빼기 연산자
console.log(1-"2");//-1
console.log(1-2); //-1

//3.곱하기 연산자
console.log(2*3); //6
console.log("2"*3); //6

//4.나누기 연산자
console.log(4/2);//2
console.log("4"/2); //2

//5.나누기 vs 나머지
console.log(5/2); //2.5
console.log(5%2); //1

//6.할당 연산자(assignment)
//  6-1.등호 연산자(=)
let x = 10;
console.log(x);

//  6.2 더하기 등호 연산자(+=)
x +=5;
console.log(x);

//  6.3 빼기 등호 연산자(-=)
x -=5;
console.log(x);


//비교 연산자(true 또는 false를 반환)
//1.일치 연산자(===)
//타입까지 일치해야 true를 반환

console.log(2===2);//true
console.log("2" ===2) //false


//2.불일치 연산자(!==)
//타입까지 일치해야 false를 반환
console.log(2!==2);//false
console.log("2" !==2) //true
console.log(2 !== "2"); //true

//3.부등호 연산자 (<,>,>=,<=,)

//4.논리 연산자(&&,||)
//4-1.(논리곱 연산자) : && 둘다 true면 true

//4-2.(논리합 연산자) : || 둘중 하나라도 true면 true

//4-3.(논리부정 연산자 =>!):값을 반대로 바꿈


//5.삼항 연산자
//조건에 따라 값을 선택한다.

let n = 10;
let result = (n>5) ? "크다" : "작다";
console.log("-------------------")
console.log(result);
