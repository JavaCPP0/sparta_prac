//상속(Inheritance)
//Class->유산으로 내려주는 주요 기능
//부모<->자식

//동물 전체에 대한 클래스

class Ainmal {
    //생성자

    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} says!`);
    }
}

class Dog extends Ainmal {
    //부모에게서 내려받은 메서들르 재정의할 수 있음
    speak(){ //overriding
        console.log(`${this.name} barks!`);
    }
}

const cuttyPuppy01 = new Dog('ranger');
cuttyPuppy01.speak();