// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

multiple = {
    [Symbol.iterator]: () => {
        const max = 10;
        let num = 0;
        return {
            next() {
                return {value: num++ * 2, done: num > max};
            },
        };
    },
};

for(item of multiple) {
    console.log(item);
}

// 함수로 만들기
// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

function makeIterable(initialValue, maxValue, callback) {
    return {
        [Symbol.iterator]: () => {
            let num = initialValue;
            return {
                next() {
                    return {value: callback(num++), done: num > maxValue};
                },
            };
        }
    }
}

const mul = makeIterable(0, 10, (n) => n * 2);
for(item of mul) {
    console.log(item);
}

const single = makeIterable(0, 10, (n) => n);
for(item of single) {
    console.log(item);
}