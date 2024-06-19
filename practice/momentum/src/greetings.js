
const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form__input')
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden'
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onSubmit);
} else {
    paintGreetings(savedUserName);
}

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hi ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}