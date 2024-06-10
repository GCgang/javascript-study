// 1.
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeFruit(array, from, to) {
    return array.map((item) => (item === from ? to : item));
}

let fruits = ['🍌', '🍓', '🍇', '🍓'];
console.log(changeFruit(fruits, '🍓', '🥝')); // [ '🍌', '🥝', '🍇', '🥝' ]


// 2.
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function countFruit(array, item) {
    return array.filter((value) => value === item).length;
    // return array.reduce((count, value) => {
    //     if (value == item) {
    //         count++;
    //     }
    //     return count;
    // }, 0);
}

fruits = [ '🍌', '🥝', '🍇', '🥝' ];
console.log(countFruit(fruits, '🥝')); // 2


// 3.
// 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function matchFruit(array1, array2) {
    return array1.filter((item) => array2.includes(item));
}

let fruits1 = ['🍌', '🥝', '🍇'];
let fruits2 = ['🍌', '🍓', '🍇', '🍓'];
console.log(matchFruit(fruits1, fruits2)); // [ '🍌', '🍇' ]


// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

result = nums
    .filter((x) => x > 5) //
    .reduce((avg, x, _, array) => avg + x / array.length, 0);
console.log(result); // 24
