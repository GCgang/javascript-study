// 1.
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeFruit(array, from, to) {
    replaced = [];
    for (let i=0; i < array.length; ++i) {
        if (array[i] == from) {
            replaced[i] = to;
        }
        else {
            replaced[i] = array[i];
        }
    }
    return replaced;
}

let fruits = ['🍌', '🍓', '🍇', '🍓'];
console.log(changeFruit(fruits, '🍓', '🥝')); // [ '🍌', '🥝', '🍇', '🥝' ]


// 2.
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function countFruit(array, item) {
    let count = 0;
    for (let i=0; i < array.length; ++i) {
        if (array[i] === item) {
            count++;
        }
    }
    return count;    
}
fruits = [ '🍌', '🥝', '🍇', '🥝' ];

console.log(countFruit(fruits, '🥝')); // 2


// 3.
// 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function matchFruit(array1, array2) {
    const matched = [];
    for (let i=0; i < array1.length; ++i) {
        if (array2.includes(array1[i])) {
            matched.push(array1[i]);
        }
    }
    return matched;
}

let fruits1 = ['🍌', '🥝', '🍇'];
let fruits2 = ['🍌', '🍓', '🍇', '🍓'];

console.log(matchFruit(fruits1, fruits2)); // [ '🍌', '🍇' ]

