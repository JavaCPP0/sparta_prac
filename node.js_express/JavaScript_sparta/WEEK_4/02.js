//무슨 제어권?
//1. 호출 시점에 대한 제어권을 갖는다.
//setInterval : 반봅해서 매개변수로 받는 콜백함수의 로직을 수행
let count =0;
const cbFunc = function(){
    console.log(count);
    if(++count>4) clearInterval(timer); //4보다 크면 interval을 clear해라
}

let timer = setInterval(cbFunc,300);