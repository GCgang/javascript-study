// 콜백함수

// 사용예제 1
function add(a, b) {
    return a + b;
}
const sub = (a, b) => { return a - b };
const div = (a, b) => a / b;

// action은 콜백함수이다
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다
// 콜백함수는 고차함수(calculator)안에서 필요한 순간에 호출이 된다
function calculator(a, b, action) {
    if (action === div && b === 0) {
        console.log('0으로 나눌 수 없음');
        return;
    }
    console.log(action(a, b));
}

calculator(1, 2, add); // 3
calculator(1, 2, sub); // -1
calculator(2, 5, (a, b) => { return a * b }); // 10
calculator(10, 0, div); // 0으로 나눌 수 없음


// 사용예제 2
function introduce (lastName, firstName, greet) {
    var fullName = lastName + firstName;
    
    greet(fullName);
}

function sayHello (name) {
    console.log(`안녕하세요 ${name} 입니다`);
}

function sayBye (name) {
    console.log(`안녕히계세요 ${name} 이었습니다`);
}

let lastName = '안';
let firstName = '현준';
introduce(lastName, firstName,  sayHello); // 안녕하세요 안현준 입니다
introduce(lastName, firstName, sayBye); // 안녕히계세요 안현준 이었습니다

// 사용예제 3
// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
function iterate(max, action) {
    for (let i=0; i < max; ++i)
        action(i);
}


const log = (i) => console.log(i);
function doubleAndLog(i) {
    console.log(i * 2);
}
iterate(3, log); // 0, 1, 2
iterate(3, doubleAndLog); // 0, 2, 4
iterate(3, (i) => console.log(i)); // 0, 1, 2
iterate(3, (i) => { console.log(i * 2)}); // 0, 2 ,4

// 사용예제 4
setTimeout(() => console.log('2초뒤 함수 실행됨'), 2000);