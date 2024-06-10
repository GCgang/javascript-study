// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 사용
// 캡슐화와 정보은닉
// 클래스의 private 필드 또는 메소드를 사용하는 효과와 동일하다

function makeCouter() {
    let count = 0;
    function increase() {
        count++;
        console.log(count);
    }
    return increase;
}

const increase = makeCouter();
increase(); // 1
increase(); // 2
increase(); // 3

class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter();
counter.increase(); // 1
counter.increase(); // 2
counter.increase(); // 3