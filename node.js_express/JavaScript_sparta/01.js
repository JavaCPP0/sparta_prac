//클래스라는 설계도를 만들어 봅시다.
class Person {
    constructor(name,age){ //생성자 함수constructor
        this.name = name;
        this.age = age;
    }

    //메서드 형태의 동사 표현
    sayHello(){
        // console.log(this.name + "님 hello");
        console.log(`${this.name}님 안녕하세요!`);
    }

    howOldAmI(){
        console.log(`${this.name} 나이는 ${this.age}살 입니다.`);
    }
}

//설계도(클래스)를 통해 인스턴스를(실제 사물) 만들어봅시다.
const person1 = new Person("jhon","30");
const person2 = new Person("Anna","28");

person1.sayHello();
person1.howOldAmI();