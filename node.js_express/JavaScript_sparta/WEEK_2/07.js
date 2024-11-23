//Map
//Js로 많고 다양하고 복잡한 프로그램들을 객체와 배열로 만들어옴
//그럼에도, 복잡한 현실세계를 반영하기엔 무리
//그래서 Map과 Set이라는 자료구조가 등장

//Map과 Set의 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리 >기존 객체나 배열보다

//Map
//Key / Value
//Key에 어떤 데이터타입도 올 수 있다.
//Map은 Key가 정렬된 순서로 저장되기 때문이다.
//검색,삭제,제거,여부 확인 기능 포함

const myMap = new Map();

myMap.set('key','value');

myMap.get('key');
//반복 method : keys(),values() ,entries()