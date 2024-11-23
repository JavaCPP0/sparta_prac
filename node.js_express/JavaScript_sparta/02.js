// 새로운 Car class 정의
//요구사항
//1.Car라는 클래스를 만들면서 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!
//modelName, modelYear, type, price
//makeNoise() 메소드로 클락션 출력
//자동차3개 만들기

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName}: 빵!`);
  }

  //자동차가 몇년식 모델인지 출력
  printModelYear() {
    console.log(this.modelName + "은 " + this.modelYear + "년도의 모델입니다.");
  }
}


// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();

car1.printModelYear();
car2.printModelYear();
car3.printModelYear();
