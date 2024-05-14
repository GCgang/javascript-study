// Scope

// 코드 블럭: { }, if() { }, for() { }, function() { }

// 블럭 외부에서 블럭 내부의 변수 참조 불가
{
    const a = 'a';
}
// console.log(a); // a is not defined

// 함수 외부에서는 함수 내부의 변수 참조 불가
function print() {
    const message = 'Hello, World';
    console.log(message);
}
// console.log(message) // message is not defined

// 함수 외부에서는 함수의 매개변수 참조 불가
function sum(a, b) {
    console.log(a, b);
}
// console.log(a, b); // a is not defined

{
    const x = 1;
    {
        const y = 2;
        console.log(x); // 1
    }
    console.log(x); // 1
    // console.log(y); // y is not defined
}

const text = 'global variable' // 전역(글로벌) 변수, 전역 스코프
{
    const text = 'inside block1'; // 지역(로컬) 변수, 지역 스코프
    {
        const text = 'inside block2';
        console.log(text); // inside block2
    }
}

