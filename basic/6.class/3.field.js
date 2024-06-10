// 접근제어자 
// public: 기본
// private: # 붙이기

class Fruit {
    type = '과일';
    #name;
    #emoji;
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };

}

const apple = new Fruit('apple', '🍎');
console.log(apple); // Fruit { type: '과일' } 나머지 프로퍼티와 메서드는 private으로 되어있어 보이지 않는다
console.log(apple.type); // 과일
console.log(apple.name); // undefined
console.log(apple.emoji); // undefined
// console.log(apple.#name); // SyntaxError
// console.log(apple.#display()); // SyntaxError

