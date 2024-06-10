function getBanana() {
    return new Promise((resolve) => {
        setTimeout(resolve('🍌'), 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(resolve('🍎'), 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
    // return new Promise((resolve, reject) => {
    //     reject(new Error('no orange'));
    // });
}

/// 바나나과 사과를 같이 가지고 오기
getBanana()
    .then((banana) => getApple().then((apple) => { return [banana, apple]; }))
    .then(console.log)

getOrange()
    .catch((error) => console.error(error))


// Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()])
    .then((fruits) => console.log('all', fruits))

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김
Promise.race([getBanana(), getApple()])
    .then((fruit) => console.log('race', fruit))

// Promise.any() 주어진 모든 프로미스 중 하나라도 완료되면 바로 반환
Promise.any([getBanana(), getApple()])
    .then((fruits) => console.log('any', fruits))
    
// 차이 비교
Promise.all([getBanana(), getApple(), getOrange()]) // 배열에 마지막에 있는 오렌지가 던진 에러만이 출력됨
    .then((fruits) => console.log(fruits))
    .catch((error) => console.error('all-error', error))

  // 주어진 모든 프로미스가 처리되면 모든 프로미스 각각의 상태와 값 (또는 거부 사유)을 모아놓은 배열을 반환
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('allSettled', fruits))
    .catch((fruits) => console.error(fruits))


