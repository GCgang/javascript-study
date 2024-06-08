const text = 'hello';
function func() {
    console.log(text);
}
func();

function  other() {
    let x = 100;
    function inner() {
        console.log(`inner: ${x}`);
    }
    return inner;
}

const inner = other();
inner();

const counter = (function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.