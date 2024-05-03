// 기본문법
class Fruit {
    constructor (name, emoji, color='rainbow') {
        this.name = name;
        this.emoji = emoji;
        this.color = color;
    }

    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }

    printColor () {
        console.log(`color: ${this.color}`);
    }
}

let apple = new Fruit('apple', '🍎');
console.log(apple);
// Fruit {
//     display: [Function: display],
//     name: 'apple',
//     emoji: '🍎',
//     color: 'rainbow'
//   }
apple.display(); // apple: 🍎
apple.printColor(); // color: rainbow
