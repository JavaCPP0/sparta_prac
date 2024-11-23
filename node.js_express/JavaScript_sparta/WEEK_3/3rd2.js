var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () { //1) fighter안의 opponent가 호출했으니까 this는 opponent를 가리키고 그 안에 fullname인 Francis Ngannou가 반환.
            return this.fullname;
        }
    },

    getName: function() {  //2,3)fighter가 호출했으니까 여기서 this.fullname은 fighter의 fullname인 'John Jones'를 반환.
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0]; //화살표 함수에선 this가 바인딩하지 않음 바로 상위값이 유지. ?왜 상위값이 저거지..? -> Ciryl Gane에서 공백을 기준으로 나눈뒤 0번째(first name)인덱스 반환
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })() //??? ()붙여 스스로 선언하고 호출까지 이게 그 클로저다 

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName); //fighter.getLastName에서 fighter는 주체가 아니다 ?왜 주체가 아닐까? 
                                                                                            //그래서 this가 상위객체를 바라본다.


// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane