// 주어진 배열에서 중복을 제거한 새로운 배열 만들기
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

function removeDuplication(array) {
    return [...new Set(array)];
}

let newArray = removeDuplication(fruits);
console.log(fruits);
console.log(newArray); // [ '🍌', '🍎', '🍇', '🍑' ]

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
    //const array = Array.from(set1).filter((n) => set2.has(n));
    const array = [...set1].filter((n) => set2.has(n));
    return array;
}

newArray = findIntersection(set1, set2);
console.log(newArray); // [ 1, 2, 3 ]
