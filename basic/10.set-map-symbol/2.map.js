// Map
const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

const map = new Map([
    ['key1', '🍧'],
    ['key2', '🍧'],
    ['key3', '🍟'],
])
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('🍟')); // false

// 순회
map.forEach((value, key) => console.log(key, value));
// key1 🍧
// key2 🍧
// key3 🍟

// 찾기
console.log(map.get('key1')); // 🍧
console.log(map.get('key3')); // 🍟

// 추가
map.set('key4', '🍉');
console.log(map);
// Map(4) {
//     'key1' => '🍧',
//     'key2' => '🍧',
//     'key3' => '🍟',
//     'key4' => '🍉'
// }

// 삭제
map.delete('key4');
map.delete('key2');
console.log(map);// Map(2) { 'key1' => '🍧', 'key3' => '🍟' }

// 모두삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '우유는 맛있어'};
const obj = {
    [key]: milk,
};

const map2 = new Map([[key, milk]]);

console.log(obj);
// Map(0) {}
// {
//   '[object Object]': { name: 'milk', price: 10, description: '우유는 맛있어' }
// }
console.log(map2);
// Map(1) {
//     { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '우유는 맛있어' }
//   }
// javascript에서 오브젝트와 map은 유사하지만
// map은 메서드가 다양하고 obj는 메서드가 없다는 점이 다르다

console.log(obj[key]); // { name: 'milk', price: 10, description: '우유는 맛있어' }
console.log(map2[key]); // undefined
// map 의 경우 get 메서드로 값을 가져와야한다
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '우유는 맛있어' }