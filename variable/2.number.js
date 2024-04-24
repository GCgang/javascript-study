let integer = 123; // 정수
let negative = -123; //음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123);   0
console.log(123 / 0); // Infinity
console.log(123 / -1); // -Infinity
console.log(123 / 'text'); // NaN(Not a Number)

// Number(value) 처럼 함수로 사용시 다른 값을 Number 타입으로 변환한다
console.log(Number("123")); // 숫자 123을 반환
console.log(Number("123") === 123); // true
console.log(Number("unicorn")); // NaN
console.log(Number(undefined)); // NaN

// Number의 정수 범위
const biggestInt = Number.MAX_SAFE_INTEGER; //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991

// bigInt
let bigInt = 1234567890123456789012345678901234567890n; // 2^53 - 1 보다 큰값
console.log(bigInt);
