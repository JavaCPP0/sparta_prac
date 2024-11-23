//refactoring


let addCoffee = (name)=>{
    return (prevName)=> {
        return new Promise(function (resolve) {
            setTimeout(function () {
                //백틱 `
                //var name = prevName + ", "+ name;
                var newName =prevName ? `${prevName}, ${name}`:name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};
addCoffee("에스프레소")
    .then(addCoffee("아메리카노"))
    .then(addCoffee("카페모카"))
    .then(addCoffee("카페라떼"));
    