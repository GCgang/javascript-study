
// 자바스크립트 함수의 다양한 용도

// 일반 함수로 사용
function play() {
    console.log('논다');
}
play(); // 논다

// 객채의 메서드로 사용
const dog = {
    name: '멍멍',
    eat: function () {
        console.log('먹는다');
    },
}
dog.eat(); // 먹는다

// 생성자 함수로 사용
function Cat(name) {
    this.name = name;
    this.swim = function () {
        console.log('수영한다');
    }
}

const cat = new Cat('야옹') ;
cat.swim(); // 수영한다



// 일반 함수가 객체의 메서드로 정의되었을 때 생성자 함수로 사용하는 경우
// 이는 불필요한 프로토타입(많은 데이터를 담고 있는 객체) 객체를 생성하는 문제가 있다
// 💩 일반 함수가 생성자 함수로 사용됨
const anotherDog = new dog.eat();
console.log(anotherDog) // eat {}

// ES6
// ES6에서는 메서드를 더 간결하게 정의할 수 있으며,
// 이 방식은 생성자 함수로 사용되지 않는다

const anotherCat = {
    name: '야옹',
    fly () {
        console.log('날다');
    }
}

anotherCat.fly();
// const obj = new anotherCat.fly(); 생성자 함수로 사용 ❌ (오류 발생)


/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔하다
 * 2. 생성자 함수로 사용이 불가능하다 (무거운 프로토타입 만들지 않음)
 * 3. 함수 자체 arguments 가 없고 외부 함수의 aruguments를 참조함
 * 4. this에 대한 바인딩이 정적으로 결정된다
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩된다
 */

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const arrowFunc = () => {};
// const obj = new arrowFunc(); TypeError: arrowFunc is not a constructor

function sum1(a, b) {
    console.log(arguments);
}

sum1(1, 2); // [Arguments] { '0': 1, '1': 2 }

const sum2 = (a, b) => {
    console.log(arguments);
}

sum2(1, 2); // [Arguments] { ... } arrow 함수 외부의 arguments를 참조만 함

const printArrow = () => {
        console.log(this);
    };
printArrow(); // {}
cat.printArrow = printArrow;
cat.printArrow(); // {}