// 단항연산자 (Unary operators)
// + (양)
// - (음)
// ! (부정)

let a = 10;
a = -a; // -1 * 10
console.log(a); // -10

a = -a;
console.log(a) // 10

a = +a;
console.log(a) // 10

a = -a;
console.log(a) // -10

a = +a; // +(-10)
console.log(a) // -10

let bool = true;
console.log(bool) // true
console.log(!bool) // false
console.log(!!bool) // true
console.log(!!!bool) //false

// 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나올지 확인
console.log(+false) // 0
console.log(+null) // 0
console.log(+'') // 0
console.log(+[]) // 0
console.log(+true) // 1
console.log(+'text') // NaN
console.log(+{}) // NaN
console.log(+undefined)// NaN
console.log(+function() {}) // NaN




