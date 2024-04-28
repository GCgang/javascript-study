// 증감연산자 Increment & Decrement Operators

let a = 0;
a++;
console.log(a) // 1
a--;
console.log(a) // 0

// 주의할 점 (전위 연산과 후위 연산 차이)
a = 0;
console.log(a++) // 0
console.log(a) // 1

a = 0;
console.log(++a) // 1
console.log(a) // 1

a = 1;
let b = a++;
console.log(b) // 1
console.log(a) // 2

a = 1;
b = ++a;
console.log(b) // 2
console.log(a) // 2

