//배열의 요소로 함수를 할당

const myArr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    }
];

console.log(myArr[0](1,3));

console.log(myArr[1](10,7));

