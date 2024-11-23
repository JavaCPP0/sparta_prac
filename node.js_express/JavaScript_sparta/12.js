// 카운트 상태 변경 함수 #2
const increase = function () {
    // 카운트 상태 변수
    let num = 0;

    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

// 이전 상태값을 유지 못함
console.log(increase()); //1 
console.log(increase()); //1
console.log(increase()); //1

//리뷰
//1. num변수를 지역변수로 선언-> 변경은 방지
// = num변수는 오직 increase 함수만이 변경가능
//  2.increase를 호출할때마다 초기화 하니까num이 항상 1
//의도치 않은 변경방지+이전 상태 유지