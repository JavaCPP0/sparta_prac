// *가 붙은 함수가 제너레이터 함수입니다.
// 이 함수를 실행하면 Iterator 객체가 반환됩니다.

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 언언
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};

//(2) 제너레이터 함수 선언
// yield 키워드로 순서 제어
var coffeeGenerator = function* () {
	var espresso = yield addCoffee('', '에스프레소');
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);
	var mocha = yield addCoffee(americano, '카페모카');
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();