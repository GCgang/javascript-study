// 고차함수(Higher-order-function)

const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 배열을 순회하면서 원하는것(콜백함수)을 할 때
fruits.forEach(
    function (value, index, array) {
        console.log('--------------------------');
        console.log(value);
        console.log(index);
        console.log(array);
    }
);

fruits.forEach((value) => console.log(value));


// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍔', price: 5};
const item2 = { name: '🍟', price: 4};
const item3 = { name: '🍗', price: 3};
const item4 = { name: '🍰', price: 2};
const item5 = { name: '🍔', price: 1};
const products = [item1, item2, item3, item4, item5];

let result = products.find((item) => item.name === '🍔');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((item) => item.name === '🍔');
console.log(result);

// some 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍔');
console.log(result); // true
result = products.some((item) => item.name === '💩');
console.log(result); // false

// every 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍔');
console.log(result); // false

// filter 조건에 맞는 모든 아이템들을 새로운 배열로 반환
result = products.filter((item) => item.name === '🍔')
console.log(result); // [ { name: '🍔', price: 5 }, { name: '🍔', price: 1 } ]

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = numArr.filter(x => x % 2 === 0);
console.log(numArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(evenArr); // [ 2, 4, 6, 8 ]


// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있다
// 배열의 모든 요소에 함수를 호출하고 새로운 배열로 반환
const nums = [1, 2, 3, 4, 5, 6, 7];
result = nums.map((x) => {
    if (x % 2 === 0) {
        return x * 2;
    } else {
        return x;
    }
});
console.log(result);
// [
//    1,  4, 3, 8,
//    5, 12, 7
// ]
result = nums.map((x) => x + 100);
console.log(result);
// [
//     101, 102, 103,
//     104, 105, 106,
//     107
// ]


// Flatmap 중첩된 배열을 펴서 새로운 배열로
// 각 요소에 대해 함수를 적용한 후에 이어서 flat 메서드를 호출하여 중첩 배열을 평면화(flatten)한다.
const arr = [1, 2, 3, 4];
const mapped = arr.map(x => [x, x * 2]);
console.log(mapped); // [[1, 2], [2, 4], [3, 6], [4, 8]]

const flatMapped = arr.flatMap(x => [x, x * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8]

const nestedArr = [[1, 2], [3, 4]];
const flatMappedNested = nestedArr.flatMap(x => x);
console.log(flatMappedNested); // [1, 2, 3, 4]


// reduce 배열의 요소들을 접어서 접어서 값을 하나로
// sum: 결과값, 맨마지막 0은 초기화값
result = [1, 2, 3, 4, 5].reduce((sum, value) => sum += value, 0);
console.log(result); // 15


// sort 배열 요소 정렬
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
num = [9, 8, 7, 6, 5, 4];
num.sort();
console.log(num); // [ 4, 5, 6, 7, 8, 9 ] 오름차순
num.sort((a, b) => b - a);
console.log(num); // [ 9, 8, 7, 6, 5, 4 ] 내림차순
const str = ['a', 'A', 'B', 'C', 'c', 'b'];
str.sort();
console.log(str); // [ 'A', 'B', 'C', 'a', 'b', 'c' ] 오름차순
str.sort((a, b) => a > b ? -1 : 1);
console.log(str); // [ 'c', 'b', 'a', 'C', 'B', 'A' ] 내림차순
