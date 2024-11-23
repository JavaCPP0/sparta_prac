// 새로운 Car class 정의
//요구사항
//1.Car라는 클래스를 만들면서 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!
//modelName, modelYear, type, price
//makeNoise() 메소드로 클락션 출력
//자동차3개 만들기

//추가 요구사항
//전기차클래스 만들기 -<Car를 상속받음
//
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
  //전기차 Class 정의
  class ElectronicCar extends Car{
    constructor(modelName,modelYear,price, chargeTime){
        //Car(부모 class)에게도 알려주기
        super(modelName, modelYear, 'e', price);//부모의 constructor
        this._chargeTime = chargeTime;
    }

    set chargeTime(value){
        this._chargeTime = value;
    }

    get chargeTime(){
        return this._chargeTime;
    }
  }

  const eleCar1 = new ElectronicCar("Tesla","2023",9000,60);
  eleCar1.makeNoise();
  eleCar1.printModelYear();
  console.log("==============");
  console.log(eleCar1.chargeTime);
  eleCar1.chargeTime =20;
  console.log(eleCar1.chargeTime);

  
// 자동차 만들기
//   const car1 = new Car("Sorento", "2023", "e", 5000);
//   const car2 = new Car("SM5", "1999", "g", 3000);
//   const car3 = new Car("QM6", "2010", "g", 4500);
//   car1.makeNoise();
//   car2.makeNoise();
//   car3.makeNoise();
  
//   car1.printModelYear();
//   car2.printModelYear();
//   car3.printModelYear();
  