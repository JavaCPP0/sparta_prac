//foeEach, map,filter,find

//1.forEach
let numbers=[1,2,3,4,5];

//매개변수 자리에 함수를 넣는 것: 콜백 함수
numbers.forEach(function(item){
    console.log('item입니다 =>'+item);
});

//2.map 
//배열의 각 요소에 대해 제공된 함수를 호출하고, 그 결과로 새로운 배열을 반환합니다.
//원래 배열은 변하지 않습니다. 항상 원본 배열의 길이만큼이 return 됩니다. 
let newNumbers = numbers.map(function(item){
    return item*2;
});

console.log(newNumbers);
//3.filter
//배열의 각 요소에 대해 제공된 함수를 호출하여, 그 결과가 true인 요소들로만 구성된 새로운 배열을 반환합니다.

let filterednumbers = numbers.filter(function(item){
    return item ===5;
})

console.log(filterednumbers);

//find
//배열의 각 요소에 대해 제공된 함수를 호출하여, 그 결과가 true인 첫 번째 요소를 반환합니다.
// 해당 요소가 없으면 undefined를 반환합니다.

let result=numbers.find(function(item){
    return item >3;
});
console.log(result);