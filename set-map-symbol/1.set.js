// Set 

const emptySet = new Set();
console.log(emptySet); // Set(0) {}

const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(1)); // true
console.log(set.has(100)); // false

// 순회
set.forEach((item) => console.log(item));
// 1
// 2
// 3

// 추가
set.add(100);
console.log(set); // Set(4) { 1, 2, 3, 100 }

// 삭제
set.delete(100);
console.log(set); // Set(3) { 1, 2, 3 }

// 모두삭제
set.clear();
console.log(set); // Set(0) {}

// obj 세트
const obj1 = { name: '🍔', price: 123};
const obj2 = { name: '🍕', price: 100};
const objSet = new Set([obj1, obj2]);
console.log(objSet); // Set(2) { { name: '🍔', price: 123 }, { name: '🍕', price: 100 } }

// key 만 출력
console.log(objSet.keys());
// [Set Iterator] {
//     { name: '🍔', price: 123 },
//     { name: '🍕', price: 100 }
// }

