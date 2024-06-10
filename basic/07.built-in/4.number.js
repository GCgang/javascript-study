// Number
const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

// Static Properties
// 0과 1사이의 가장 작은값
console.log(Number.EPSILON); // 2.220446049250313e-16
// 최댓값, 최솟값
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
// INT 최대, 최소 허용범위 - 1
// (253 - 1)
// (-(253 - 1))
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// Not a Numbe
console.log(Number.NaN); // NaN
// Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
// -Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// Static methods
// Infinity, -Infinity, NaN, 또는 숫자가 아닌 값을 제외한 유한한 숫자인지 확인
console.log(Number.isFinite(123)); // true
// 값이 정수인지 확인
console.log(Number.isInteger(3.14)); // false
// NaN(Not a Number)인지 확인
console.log(Number.isNaN(0 / 0)); // true
// 안전한 정수인 -(2^53 - 1)에서 2^53 - 1 사이의 값인지 확인
console.log(Number.isSafeInteger(9999999999999999)); // false
//문자열을 파싱하여 부동소수점 숫자로 변환
console.log(Number.parseFloat('123.123')); // 123.123
//문자열을 파싱하여 정수로 변환
console.log(Number.parseInt('123.123')); // 123

// Instance methods
// 지수 표기법 (매우 크거나 작은 숫자를 표현할 떄 사용, 10의 n승으로 표기)
const num3 = 110;
console.log(num3.toExponential()); // 1.1e+2

// 반올림하여 문자열로 변환
const num4 = 1234.1234;
console.log(num4.toFixed()); // 1234
console.log(num4.toFixed(2)); // 1234.12
const num5 = 1234.5678;
console.log(num5.toFixed()); // 1235
console.log(num5.toFixed(1)); // 1234.6

// 숫자를 호출한 지역의 언어에 맞게 문자열로 변환
const num6 = 160000;
console.log(num6.toLocaleString('en-US')); // 미국: 160,000
console.log(num6.toLocaleString('de-DE')); // 독일: 160.000
console.log(num6.toLocaleString('ar-SA')); // 사우디 아라비아: ١٦٠٬٠٠٠

// 원하는 자릿수까지 유효하도록 반올림
const num7 = 1234.123;
console.log(num7.toPrecision(5)); // 1234.1
console.log(num7.toPrecision(4)); // 1234
console.log(num7.toPrecision(3)); //1.23e+3 >> 전체 자릿수 표기가 안될때는 지수표기법으로 표현

// 숫자를 문자열로 변환, 기수(radix) 지정 가능
const num8 = 1234;
console.log(num8.toString()); // 1234
console.log(num8.toString(2)); // 10011010010
console.log(num8.toString(8)); // 2322
console.log(num8.toString(16)); // 4d2

// 객체의 기본 원시 값을 반환
const num9 = 123;
const num10 = new Number(123);
console.log((num9)); // 123
console.log((num10.valueOf())); // 123


// Epsilon : 부동소수점으로 인해 발생하는 오차를 해결하기 위해 사용
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log('0과 1사이에서 나타낼 수 있는 가장 작은 숫자'); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num11 = 0.1 + 0.2 - 0.2;
console.log(num11); // 0.10000000000000003

// origin - expected 한 절대값이 Number.EPSILON보다 작으면 같은 수로 인정
function isEqual(origin, expected) {
    return Math.abs(origin - expected) < Number.EPSILON;
}
const iE = (origin, expected) => { return Math.abs(origin - expected) < Number.EPSILON;}

console.log(num11 === 0.1); // false
console.log(isEqual(num11, 0.1)); // true
console.log(iE(num11, 0.1)); // true

