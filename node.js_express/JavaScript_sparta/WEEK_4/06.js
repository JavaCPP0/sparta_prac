//콜백 함수 내부의 this에 가른 값 바인딩하기
//콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
//콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

var obj1 = {
    name: "obg1",
    func: function(){
        let self = this;
        return function(){
            console.log(slef.name);
        };
    },
};

let callback = obj1.func();
setTimeout(callback,1000);

