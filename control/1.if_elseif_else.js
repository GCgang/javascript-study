// 조건문 Conditional statement

// if..else if...else
function testNum(num) {
    let result;
    if (num > 0)
        return 'positive';
    else
        return 'NOT positive';
}
console.log(testNum(1)) // positive
console.log(testNum(-5)); // NOT positive

let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎'); // 🍎 출력
}
else if (fruit === '🍎') {
    console.log('apple');
}
else {
    console.log('💩');
}
