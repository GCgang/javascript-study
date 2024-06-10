// Hoisting

// 실행전 코드를 쭉 보면서 렉시컬 환경을 만든것을 기반으로 호이스팅을 해준다
// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해준다
// 함수의 선언문은 선언 이전에도 호출이 가능하다
print();

function print() {
    console.log('hoisting');
}

// 변수(let, const), 클래스는 선언만 호이스팅이 되고,
// 초기화는 안된다
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생한다
// console.log(num); // Cannot access 'num' before initialization (선언까지만 호이스팅이 된다)
const num = 1;

// func();// Cannot access 'func' before initialization
let func = function test() { console.log('test'); };


// const me = new Person('A', 99); // Cannot access 'func' before initialization
class Person {
    constructor(name='ahj', age=100, emoji='😆') {
        this.name = name;
        this.age = age;
        this.emoji = emoji;
    }
};

let x = 1;
{
    console.log(x);
    // let x = 2; // Cannot access 'x' before initialization
}
