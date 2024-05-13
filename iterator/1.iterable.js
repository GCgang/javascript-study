// Iterable 하다는건 순회가 순회가 가능하다는 것이다
// // [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체라는 것을 의미한다
// 순회가 가능하면 반복문이나, 연산자들을 사용할 수 있다

const array = [1, 2, 3];
for (item of array) {
    console.log(item); // 1 2 3
}

// iterator 사용해 보기
const iterator = array.values(); // values, keys, entries 등의 메서드에서는 iterable 한 iterator를 반환한다
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().done); // false
console.log(iterator.next()); // { value: undefined, done: true }

const it = array.entries();
while (true) {
    const item = it.next();
    if (item.done === true) break;
    console.log(item.value);    
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]

//  for of 연산자 사용시 obj is not iterable
const obj = { 0:1, 1:2 };
for(item in obj) {
    console.log(item); // 키를 출력 0, 1
}
