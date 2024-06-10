// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수 (거듭제곱)

console.log(10 + 1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);
console.log(10 ** 2);

const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log(num2 / num1);

// + 연산 주의점
let text = "문자열" + "문자열"
console.log(text) // 문자열문자열

text = '1' + 1 // 숫자 + 문자열 => 문자열로 변환
console.log(typeof text) // string