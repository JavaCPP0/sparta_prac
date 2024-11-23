
let newArr = [10,20,30].map(function(currentValue,index){
    console.log(currentValue,index);
    return currentValue +5;
});

console.log(newArr); //[15, 25, 35] return이 없다면 map은 무엇이라도 할당해야해서 undefined를 넣는다.