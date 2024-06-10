// function fetchEgg(chicken) {
//     return new Promise ((resolve, reject) => {
//         return resolve(`${chicken} => 🥚`);
//     })
// }

// function fryEgg(egg) {
//     return new Promise ((resolve, reject) => {
//     if (egg !== '🐓 => 🥚')
//         return reject(`에러 발생`);
//     return resolve(`${egg} => 🍳`);
//     })
// }

// function getChicken() {
//     return new Promise((resolve, reject) => {
//         return resolve('🐓');
//     });
// }

// getChicken()
//     .then((chicken) => { return fetchEgg(chicken); })
//     .then((egg) => { return fryEgg(egg); })
//     .then((result) => { console.log(result); })
//     .catch((error) => { console.error(error); })


//🐓 => 🥚 => 🍳

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가져올 수 없음'));
    // return Promise.resolve(`🪴 => 🐔`)
}

getChicken()
    .catch(() => '🐓')
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)

//🐓 => 🥚 => 🍳
