const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.keys()); //출력:[Map Iterator] { 'one', 'two', 'three' }

for(const key of myMap.keys()) {
    console.log(key);
}
//one
//two
//three

console.log(myMap.values()); //[Map Iterator] { 1, 2, 3 }

for (const value of myMap.values() ){
    console.log(value);
}
//1
//2
//3

console.log(myMap.entries()); //[Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }

for(const value of myMap.entries()){
    console.log(value);
}
//[ 'one', 1 ]
// [ 'two', 2 ]
// [ 'three', 3 ] 

console.log(myMap.size); //map의 사이즈(길이) 3
console.log(myMap.has("two")) //key기반 검색 true