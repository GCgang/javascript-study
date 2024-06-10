const horizontal = document.querySelector('.line-horizontal');
const vertical = document.querySelector('.line-vertical');
const target = document.querySelector('.target');
const screenLog = document.getElementById('screen-log');

window.addEventListener('load', (event) => { // 이미지가 업로드 되기 전에 마우스가 움직였을 때 에러가 발생했기 때문에 load 체크
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        horizontal.style.transform = `translateY(${mouseY}px)`
        vertical.style.transform = `translateX(${mouseX}px)`
        target.style.transform = `translate(${mouseX - targetHalfWidth}px, ${mouseY - targetHalfHeight}px)`
        screenLog.style.transform = `translate(${mouseX+30}px, ${mouseY+20}px)`

        screenLog.innerHTML = `
            ${mouseX}px ${mouseY}px
        `
    })
})