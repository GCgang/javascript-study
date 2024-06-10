// method
const apple = {
    name: 'apple',
    color: 'red',
    display: function () {
        console.log(`안녕 나는 ${this.name}이고 🍎와 같이 생겼어`);
        console.log(`color: ${this.color}`);
    },
    printColor: () => {
        console.log(`color: ${this.color}`); // => 함수 사용하지 말고 일반함수로 정의해야 undefined아닌 this를 사용하여 red가 출력됨
    },
};

apple.display();
// 안녕 나는 apple이고 🍎와 같이 생겼어
// color: red

apple.printColor(); // undefined
