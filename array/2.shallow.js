// Shallow Copy
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이러우지기 때문에
// 깊은 복사를 원할시에는 JSON.parse && JSON.stringify, 재귀함수 구현, 라이브러리 등을 사용하면 된다

const pizza = {
    name: '🍕',
    price: 3, 
};

const ramen = {
    name: '🍜',
    price: 2,
};

const sushi = {
    name: '🍣',
    price: 1,
};
console.log(pizza); // { name: '🍕', price: 3 }
console.log(ramen); // { name: '🍜', price: 2 }
console.log(sushi); // { name: '🍣', price: 1 }

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1); // [ { name: '🍕', price: 3 }, { name: '🍜', price: 2 } ]
console.log(store2); // [ { name: '🍕', price: 3 }, { name: '🍜', price: 2 } ]

store2.push(sushi);
console.log(store1); // [ { name: '🍕', price: 3 }, { name: '🍜', price: 2 } ]
console.log(store2);
// [
//     { name: '🍕', price: 3 },
//     { name: '🍜', price: 2 },
//     { name: '🍣', price: 1 }
// ]

// store1 과 store2 모두 피자 이름과 가격이 바뀜
store1[0].name = '🍕🍕🍕🍕🍕🍕';
store2[1].price = 15;
console.log(store1); // [ { name: '🍕🍕🍕🍕🍕🍕', price: 15 }, { name: '🍜', price: 2 } ]
console.log(store2);
// [
//     { name: '🍕🍕🍕🍕🍕🍕', price: 15 },
//     { name: '🍜', price: 2 },
//     { name: '🍣', price: 1 }
// ]
