const horizontal = document.querySelector('.line-horizontal');
const vertical = document.querySelector('.line-vertical');
const target = document.querySelector('.target');
const screenLog = document.getElementById('screen-log');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    horizontal.style.top = `${mouseY}px`
    vertical.style.left = `${mouseX}px`
    target.style.top = `${mouseY}px`
    target.style.left = `${mouseX}px`
    screenLog.style.top = `${mouseY}px`
    screenLog.style.left = `${mouseX}px`

    screenLog.innerHTML = `
        ${event.clientX}px ${event.clientY}px
    `
})