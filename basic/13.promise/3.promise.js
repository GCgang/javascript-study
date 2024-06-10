// Promise

function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error('seconds를 전달하지 않았거나, 0보다 작음'));
        }
        setTimeout(resolve, seconds * 1000);
    });
}

runInDelay(2)
    .then(() => console.log('성공'))
    .catch(console.error)
    .finally(console.log('끝'));
