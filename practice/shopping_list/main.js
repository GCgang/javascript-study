const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');

items.addEventListener('click', onDelete);
addBtn.addEventListener('click', onAdd);
function onAdd(event) {
    const text = input.value;
    if (text.trim() === '') {
        input.focus();
        return ;
    }


    items.appendChild(itemRow);

    input.value = '';
    input.focus();
}
