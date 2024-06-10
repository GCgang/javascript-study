// 과일 이름과 이모지를 받아서 객체를 만드는 생성자 함수
// 대문자로 시작한다
function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
    this.color = 'rainbow';
	this.display = function() {
		console.log(`${this.name}: ${this.emoji}`);
	};
    this.printColor = () => console.log(`color: ${this.color}`);
    // return this; // 생략가능(생성자 함수에서는 자동으로 this가 리턴됨)
} 

// 사용예제 1
const apple = new Fruit('apple', '🍎');
console.log(apple);
// Fruit {
//     name: 'apple',
//     emoji: '🍎',
//     color: 'rainbow',
//     display: [Function (anonymous)],
//     printColor: [Function (anonymous)]
//   }
apple.display(); // apple: 🍎
apple.printColor(); // color: rainbow


const mango = new Fruit('mango', '🥭');
console.log(mango);
// Fruit {
//     name: 'mango',
//     emoji: '🥭',
//     color: 'rainbow',
//     display: [Function (anonymous)],
//     printColor: [Function (anonymous)]
//   }
mango.display(); // mango: 🥭
mango.printColor(); // color: rainbow


// 사용예제 2
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar); // { make: 'Ford', model: 'Mustang', year: 1969 }

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const car = new Car("Eagle", "Talon TSi", 1993);
console.log(car); // Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

const kenscar = new Car("Nissan", "300ZX", 1992);
console.log(kenscar); // Car { make: 'Nissan', model: '300ZX', year: 1992 }

const vpgscar = new Car("Mazda", "Miata", 1990);
console.log(vpgscar); // Car { make: 'Mazda', model: 'Miata', year: 1990 }


const testObj = Object.create(vpgscar);
console.log(testObj.make); // Mazda
console.log(testObj.model); // Miata
console.log(testObj.year); // 1990