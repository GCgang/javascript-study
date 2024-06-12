const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');

items.addEventListener('click', onDelete);
addBtn.addEventListener('click', onAdd);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

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
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.textContent = text;

    const itemDelete = document.createElement('button');
    itemDelete.setAttribute('class', 'item__delete');
    itemDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(itemDelete);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}
