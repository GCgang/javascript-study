// static 정적 프로퍼티, 메서드
// 예시 1
class Fruit {
    // 클래스 레벨의 프로퍼티
    static MAX_FRUITS = 4;

    constructor (name, emoji, color='rainbow') {
        this.name = name;
        this.emoji = emoji;
        this.color = color;
    }

    // 클래스 레벨의 메서드
    static makeMango = () => {
        return new Fruit('mango', '🥭', 'yellow');
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
    // 인스턴스 레벨의 메서드
    printColor () {
        console.log(`color: ${this.color}`);
    }

}

// 클래스 레벨의 프로퍼티 출력
console.log(Fruit.MAX_FRUITS); // 4

// 클래스 레벨의 메소드 사용
const mango = Fruit.makeMango();
console.log(mango);
// Fruit {
//     display: [Function: display],
//     name: 'mango',
//     emoji: '🥭',
//     color: 'yellow'
//   }


// 인스턴스 레벨의 메소드 사용
const apple = new Fruit('apple', '🍎');
console.log(apple);
// Fruit {
//     display: [Function: display],
//     name: 'apple',
//     emoji: '🍎',
//     color: 'rainbow'
//   }
apple.display(); // apple: 🍎
apple.printColor(); // color: rainbow


// 예시 2
class Car {
    static totalCars = 0;

    constructor(model) {
        this.model = model;
        Car.totalCars++;
    }

    display  () {
        console.log(`myCar: ${this.model}`);
    }

    static displayTotalCars = () => {
        console.log(`${Car.totalCars}`);
    }
}

const firstCar = new Car('Bugatti');
const secodCar = new Car('Rolls-Royce');
const thirdCar = new Car('Lamborghini');

console.log(firstCar); // Car { model: 'bugatti' }
firstCar.display(); // myCar: bugatti
console.log(secodCar); // Car { model: 'Rolls-Royce' }
secodCar.display(); // myCar: Rolls-Royce
console.log(thirdCar); // Car { model: 'Lamborghini' }
thirdCar.display(); // myCar: Lamborghini

Car.displayTotalCars(); // 3
console.log(Car.totalCars); // 3
