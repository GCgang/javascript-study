function loop() {
    const array = [];
    // var과 let의 차이점!
    for (let i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func) => func());

// let 
// 0
// 1
// 2
// 3
// 4

// var 
// 5
// 5
// 5
// 5
// 5