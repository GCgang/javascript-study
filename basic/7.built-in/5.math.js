// Math

// Static Properties
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI 값

// Static Methods
// 절대값
console.log(Math.abs(-123)); // 123
// 올림
console.log(Math.ceil(123.1)); // 124
// 내림
console.log(Math.floor(123.9)); // 123
// 반올림
console.log(Math.round(123.4)) // 123
console.log(Math.round(123.5)) // 124
// 최댓값
console.log(Math.max(-10, 1, 10, 100, 1000)); // 1000
// 최솟값
console.log(Math.min(-10, 1, 10, 100, 1000)); // -10
// 거듭제곱
console.log(Math.pow(10, 2)); // 100
// 제곱근
console.log(Math.sqrt(100)); // 10
// 소수점 제거후 정수만 반환
console.log(Math.trunc(10.123123)); 10
// 0 ~ 1 사이의 랜덤한 값 반환
console.log(Math.random());
// 1 ~ 10 사이의 랜덤한 값 반환
console.log(Math.trunc(Math.random() * 10 + 1));