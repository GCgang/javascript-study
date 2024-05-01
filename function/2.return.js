// return을 명시적으로 하지 않으면 undefined를 반환한다
function add(a, b) {
}

console.log(add()); // undefined

// 반환값이 필요없는 함수의 경우 return을 생략하면 된다
function printEmoji () {
    console.log('👍');
}

printEmoji(); // 👍

// return 을 사용하여 함수 흐름을 제어할 수 있다
function printPositiveNumber(num) {
    if (num < 0)
        return ;
    console.log(num);
}

printPositiveNumber(10); // 10
printPositiveNumber(-10); // 출력 x