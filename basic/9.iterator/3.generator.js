// Generator

function* multipleGenerator() {
    try {
        for (let i=0; i<10; ++i) {
            yield i ** 2;
        }    
    } catch (error) {
        console.log(error);
    }
}

const multiple = multipleGenerator();
console.log(multiple.next()); // { value: 0, done: false }
console.log(multiple.next().value, multiple.next().done); // 1 false
// multiple.return(); // done을 true로 만들어서 반복을 끝낼 수 있음
console.log(multiple.next()); // { value: undefined, done: true }
multiple.throw('error!'); // error!
