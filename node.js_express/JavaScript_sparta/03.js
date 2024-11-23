//Getters 와 Setters
//객체지향 프로그래밍 언어에는 Getters 와 Setters의 기본 개념이 있다.
//클래스가 있다면 객체(인스턴스)가 있고 그 안에 프로퍼티(constructor를 통해 생성)가 있다.

class Rectangle {
    constructor(height, width) {
        //underscore(_) : private
        this._height = height;
        this._width = width;
    }

    //width를 위한 getter
    get width(){
        return this._width;
    }

    //width를 위한 setter
    set width(value){
        //검증 1 : value가 음수면 오류
        if(value<=0){
            console.log('오류:가로길이는 0보다 커야합니다.');
            return;
        } else if(typeof value !=='number'){
            console.log('오류:가로길이로 입력된 값이 숫자가 아닙니다.')
            return;
        }
        this._width=value;
    }
 
    //height 위한 getter
    get height() {
        return this._height;
    }

    //height 위한 setter
    set height(value){
         //검증 1 : value가 음수면 오류
         if(value<=0){
            console.log('오류:세로길이는 0보다 커야합니다.');
            return;
        } else if(typeof value !=='number'){
            console.log('오류:세로길이로 입력된 값이 숫자가 아닙니다.')
            return;
        }
        this._height=value;
    }

    //getArea : 가로 *세로 = 넓이
    getArea(){
        const a = this._width * this._height;
        console.log(`넓이는 = >${a}입니다.`)
    }
}

//instance생성
const ret1 = new Rectangle(10,20);
ret1.getArea();
// const ret2 = new Rectangle(10,30);
// const ret3 = new Rectangle(15,20);
