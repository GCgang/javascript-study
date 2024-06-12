// Import the uuid package from CDN
import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@latest/dist/esm-browser/index.js';

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');
const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
})

items.addEventListener('click', (event) => {
    const id = event.target.dataset?.id;
    if (id) {
        const toDeleted = document.querySelector(`.item__row[data-id="${id}"]`);

        toDeleted?.remove();
    }
})

function onDelete(event) {
    event.target.closest('.item__delete')?.closest('li')?.remove();
}

function onAdd(event) {
    const text = input.value;
    if (text.trim() === '') {
        input.focus();
        return ;
    }

    const itemRow = createItem(text);
    items.appendChild(itemRow);
    itemRow.scrollIntoView({ block: 'center' });
    input.value = '';
    input.focus();
}

function createItem(text) {
    const id = uuidv4();
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fa-solid fa-trash-can" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>
    `
    return itemRow;
}
