// Symbol
// 유일한 키를 생성할 수 있음

const map1 = new Map();
let key1 = 'key';
let key2 = 'key';
map1.set(key1, 'hikey');
console.log(map1); // Map(1) { 'key' => 'hikey' }
console.log(map1.get(key2)); // hikey
console.log(key1 === key2); // true

// Symbol을 사용하여 유일한 키를 생성
const map2 = new Map();
key1 = Symbol('key');
key2 = Symbol('key');
map2.set(key1, 'hikey');
console.log(map2); // Map(1) { Symbol(key) => 'hikey' }
console.log(map2.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하고 싶은경우
// Symbol.for 사용
// 전역 심볼 레지스트리 (Global Symbol Registry)

const mySymbol = Symbol.for('key');
const sameSymbol = Symbol.for('key');
console.log(mySymbol === sameSymbol);// true

console.log(Symbol.keyFor(mySymbol)); // key
console.log(Symbol.keyFor(sameSymbol)); // key

const obj = { [mySymbol]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[mySymbol]); // Hello 
console.log(obj[Symbol('key')]); // undefined 가 나오는 이유는 obj 를 만들때 사용한 심볼과 여기서 호출할 떄 사용한 심볼이 다르기 때문이다
