// typeof : 데이터 타입을 반환
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = 123n;
console.log(typeof variable);

variable = '123';
console.log(typeof variable);

variable = true;
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function() {};
console.log(typeof variable);