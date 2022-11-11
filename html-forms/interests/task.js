const checkedAll = document.querySelectorAll('input[type=checkbox]');

function checkedChildren(bul, element) {
    let li = element.closest('li')
    let checkedBox = [...li.querySelectorAll('input[type=checkbox]')];
    checkedBox.forEach(e => {
        e.checked = bul;
    });
}

function checkedParent(bul, element) {
    let parent = element.closest('ul').closest('li');
    if (parent) {
        let checkedElement = parent.querySelector('input[type=checkbox]');    
        checkedElement.checked = checkingNeighbors(bul, element) ? bul : false;
        checkedParent(bul, checkedElement);
    }
}

function checkingNeighbors(bul, element) {
    let ul = element.closest('ul');
    let checkedBox = [...ul.querySelectorAll('li > label > input[type=checkbox]')];
    return (checkedBox.find(item => item.checked === !bul)) ? false : true;
}

[...checkedAll].forEach(item => {
    item.addEventListener('change', e => {
        let bul = e.target.checked;
        checkedChildren(bul, item);
        checkedParent(bul, item);
    });
});