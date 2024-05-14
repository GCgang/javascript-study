// setTimeout

function excute() {
    console.log(1);
    setTimeout(() => { console.log(2); }, 2000);
    console.log(3);
}

excute(); 
// 1
// 3
// 2

// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 반환 ⏱

function runInDelay(callback, seconds) {
    if (!callback) {
        throw new Error('callback 함수를 전달해야 함');
    }
    if (!seconds || seconds < 0) {
        throw new Error('seconds를 전달하지 않았거나, 0보다 작음');
    }
    setTimeout(callback, seconds*1000);
}

try {
    runInDelay(() => { console.log('my Timeout'); }, 4);
    console.log('타이머 실행');
} catch (error) {
    console.log(error);
}