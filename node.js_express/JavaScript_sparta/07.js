//Static Method (=정적 메소드)
//Class는 객체를 다량으로 안전하고 정확하게 만들기 위해 사용
//메소드만 쓰고싶은걸? => static붙이기
class Calculater{

    static add(a,b){
        console.log("계산기: 더하기를 진행합니다.");
        return a+b;
    }

    static sub(a,b){
        console.log("계산기: 빼기를 진행합니다.");
        return a-b;
    }
}
Calculater.add(3,5);
Calculater.sub(3,5);