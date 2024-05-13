// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// {...obj}

function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
// spread
console.log(add(...nums));

// Rest parameters
function restParameters(first, second, ...nums) {
    console.log(first); // 1
    console.log(second); // 2
    console.log(nums); // [ 10, 9, 8, 7 ]
}
restParameters(1, 2, 10, 9, 8, 7);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr1 = fruits1.concat(fruits2);
console.log(arr1); // [ '🍏', '🥝', '🍓', '🍌' ]

let arr2 = [...fruits1, ...fruits2];
console.log(arr2); // [ '🍏', '🥝', '🍓', '🍌' ]

// Object
const me = {
    name: 'hj',
    age: '100',
}

const update = {
    ...me,
    job: 'ceo',
}
console.log(me); // { name: 'hj', age: '100' }
console.log(update); // { name: 'hj', age: '100', job: 'ceo' }