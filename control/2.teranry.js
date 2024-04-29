// 조건문 Conditional statement

// 삼항 조건 연산자 (Ternary operator)
// 조건식 ? 참인경우 : 거짓인경우
fruit === 'apple' ? console.log('🍎') : console.log('💩'); // 🍎 출력

let apple = fruit !== 'apple' ? '🍎' : '💩';
console.log(apple); // 💩 츨력

let greeting = (person) => {
    let name = person ? person.name : 'stranger';
    return ('Hi, ' + name);
};

  console.log(greeting({ name: `HJ` })); // Hi, HJ
  console.log(greeting(null)); // Hi, stranger

function example(num) {
    return num === 0 ? '==='
        : num > 0 ? '>'
        : num < 0 ? '<'
        : 'x';
}
console.log(example(0)); // ===
console.log(example(1)); // >
console.log(example(-1)); // <
console.log(example('hi')); // x