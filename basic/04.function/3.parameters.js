// 매개변수의 기본값은 무조건 undefined
function sum(a, b) {
    console.log(a); // undefined
    console.log(b); // undefined
    return a + b;
}

console.log(sum()); // NaN

// 매개변수를 받는 함수를 호출할 때 더 많은 인자를 적어서 호출하게되면 추가로 준 매개변수는 생략된다
function sub(a, b) {
    console.log(a); // 1
    console.log(b); // 2
    return a - b; 
}

console.log(sub(1, 2, 3)); // -1

// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장되어
// 함수객체에 있는  arguments라는 기능을 사용하면 들어온 인자를 알 수 있고 각각 배열처럼 접근할 수 있다
function mul(a, b, c) {
    console.log(arguments); // [Arguments] { '0': 2, '1': 5, '2': 100 }
    console.log(arguments[0]); // 2
    console.log(arguments[1]); // 5
    return (arguments[0] * arguments[1]);
}

console.log(mul(2, 5, 100)); // 10

// Rest parameters
// 얼마나 많은 개수의 인자가 전달될지 모를 때 그 인자를 모두 배열로 받는다
function div(a, b, ...numbers) {
    console.log(a); // 10
    console.log(b); // 2
    console.log(numbers); // [ 1, 2, 3, 4, 5 ]
    return a / b; 
}

console.log(div(10, 2, 1, 2, 3, 4, 5)); // 5