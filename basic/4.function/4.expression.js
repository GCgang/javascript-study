// 함수 표현식 const name = function () { }
let add = function (a, b) {
    return a + b;
};

console.log(add(1, 2)); // 3

// 화살표 함수 const name = () => { }
let sub = (a, b) => { return a - b; };
console.log(sub(1, 2)); // -1

let mul = (a, b) => a * b;
console.log(mul(2, 5)); // 10

// IIFE(Immediately-Invoked Function Expressions)
// 즉각적으로 처리되는 함수 표현식으로 함수 정의와 동시에 호출이 가능하다
(function printEmoji () {
    console.log('🦄'); //🦄
})();