//스코프, 전역변수, 지역변수, 화살표함수


function printX() {
    let x= 10; //지역변수
    console.log(x);
}

console.log(x); //오류 x is not defined
printX();


let y= 10; //전역변수

function printX() {
    console.log(y);
}

console.log(y); //10
printX();