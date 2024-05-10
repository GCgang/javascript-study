// Array

/**
 * 일반적인 배열은 동일한 공간이 빈틈없이 연속적으로 나열된 자료구조이다.
 * 하지만 자바스크립트의 배열은 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며
 * 연속적으로 이어져 있지 않을 수 있다
 * 이러한 배열을 희소배열이라고 하며, 일반적인 배열의 동작을 흉내 낸 특수한 객체라고 할 수 있다.
 */

// 배열 생성
let arr1 = new Array();
console.log(arr1); // []

arr1 = new Array(3);
console.log(arr1); // [ <3 empty items> ]

arr1 = new Array(1, 2, 3);
console.log(arr1); // [ 1, 2, 3 ]

arr1 = [4, 5, 6];
console.log(arr1); // [ 4, 5, 6 ]

arr1 = Array.from('text');
console.log(arr1); // [ 't', 'e', 'x', 't' ]

arr1 = Array.from( 
    {
        0: '배',
        1: '열',
        length: 2,
    }
);
console.log(arr1); // [ '배', '열' ]

// 배열 아이템 참조
console.log(arr1[0]); // 배
console.log(arr1[1]); // 열

for (let i=0; i < arr1.length; ++i) {
    console.log(arr1[i]); // 배 열
}


// Methods
const fruits = ['🥭', '🍉', '🍓'];

// 배열인지 아닌지 확인
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 떄
console.log(fruits.indexOf('🥭')); // 0
console.log(fruits.indexOf('🍌🍌')); // -1 없는경우

// 특정한 아이템을 포함하고 있는지 체크
console.log(fruits.includes('🥭')); // true
console.log(fruits.includes('🍌🍌')); // false

// 추가 - 맨 뒤
console.log(fruits); // [ '🥭', '🍉', '🍓' ]
fruits.push('🍌'); // 배열 자체를 수정(업데이트))
console.log(fruits); // [ '🥭', '🍉', '🍓', '🍌' ]

// 추가 - 맨 앞
console.log(fruits); // [ '🥭', '🍉', '🍓', '🍌' ]
fruits.unshift('🍅'); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍅', '🥭', '🍉', '🍓', '🍌' ]

// 추가 - 좋지 않은 방식 💩
fruits[0] = '💩'; // 배열 자체를 수정(업데이트)
fruits[fruits.length] = '💩';
console.log(fruits); // [ '💩', '🥭', '🍉', '🍓', '🍌', '💩' ]

// 제거 - 맨뒤
console.log(fruits); // [ '💩', '🥭', '🍉', '🍓', '🍌', '💩' ]
fruits.pop();  // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '💩', '🥭', '🍉', '🍓', '🍌' ]

// 제거 - 맨앞
console.log(fruits); // [ '💩', '🥭', '🍉', '🍓', '🍌' ]
fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🥭', '🍉', '🍓', '🍌' ]

// 제거 - 좋지 않은 방식 💩
console.log(fruits); // [ '🥭', '🍉', '🍓', '🍌' ]
delete fruits[1]; // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🥭', <1 empty item>, '🍓', '🍌' ] 
console.log(fruits[1]); // undefined


// 중간에 추가 및 삭제
// splice(start(필수), deleteCount(선택), ...items(선택)): T[]; -> 기존 요소를 추가하거나 제거하는 함수
const numArr = ['one', 'two', 'three', 'four', 'five'];
console.log(numArr);
const deleted = numArr.splice(2); // 배열 자체를 수정(업데이트)
console.log(numArr); // [ 'one', 'two' ]
console.log(deleted); // [ 'three', 'four', 'five' ]
numArr.splice(2, 0, 'three', 'four'); // 배열 자체를 수정(업데이트)
console.log(numArr); // [ 'one', 'two', 'three', 'four' ]
numArr.splice(-1, 1, 4); // 배열 자체를 수정(업데이트)
console.log(numArr); // [ 'one', 'two', 'three', 4 ]

// 잘라진 새로운 배열을 만들기
let newArr = numArr.slice(2);
console.log(numArr); // [ 'one', 'two', 'three', 4 ]
console.log(newArr); // [ 'three', 4 ]
newArr = numArr.slice(0, 2);
console.log(newArr); // [ 'one', 'two' ]
newArr = numArr.slice(-1);
console.log(newArr); // [ 4 ]

// 여러개의 배열 붙이기
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];
const arr4 = arr2.concat(arr3);
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 4, 5, 6 ]
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로 만들기
arr4.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 펴기
let nestedArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(nestedArr); // [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]
console.log(nestedArr.flat()); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ] 인자를 넘기지 않으면 기본으로 1단계만 중첩을 제거한다
console.log(nestedArr); // [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]
console.log(nestedArr.flat(2)); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log(nestedArr); // [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]
console.log(nestedArr.flat(3));
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]
console.log(nestedArr); // [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]

// 특정한 값으로 배열 채우기
let array = new Array(5).fill(0);
console.log(array); // [ 0, 0, 0, 0, 0 ]

array.fill('T');
console.log(array); // [ 'T', 'T', 'T', 'T', 'T' ]

array.fill('0', 0, 2);
console.log(array); // [ '0', '0', 'T', 'T', 'T' ]

array.fill(8, 4);
console.log(array); // [ '0', '0', 'T', 'T', 8 ]

// 배열을 문자열로 합치기
const arr5 = ['a', 'b', 'c', 'd', 1, 2, [3, 4]];
let text = arr5.join();
console.log(text); // a,b,c,d,1,2,3,4
text = arr5.join(', '); 
console.log(text); // a, b, c, d, 1, 2, 3,4
text = arr5.join(' | ');
console.log(text); // a | b | c | d | 1 | 2 | 3,4





