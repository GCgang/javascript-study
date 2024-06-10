// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 둘다 다름

console.log(1 == 1); // true
console.log(1 != 1); // false
console.log(1 === 1); // true
console.log(1 !== 1); // false

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(65 == 'A'); // false
console.log(65 == 'A'.charCodeAt(0)); // true 


const fruit1 = {
    name: '망고',
};

const fruit2 = {
    name: '망고',
};

console.log(fruit1 == fruit2); // false
console.log(fruit1 === fruit2); // false
console.log(fruit1.name == fruit2.name); // true
console.log(fruit1.name === fruit2.name); // true

let fruit3 = fruit2;
console.log(fruit3 == fruit2); // true;
console.log(fruit3 === fruit2); // true;



