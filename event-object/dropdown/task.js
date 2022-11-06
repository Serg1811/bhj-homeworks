const btn = Array.from(document.querySelectorAll('.dropdown__value'));
const links = Array.from(document.querySelectorAll('.dropdown__link'));

//колбэк для клика на кнопку меню
function onClickMenu(e) {
    e.target.nextElementSibling.classList.toggle('dropdown__list_active');
}

//колбэк для клика на элемент меню
function onClickLink(e) {
    let text = e.target.textContent;
    let listActive = e.target.closest('.dropdown__list_active');
    e.preventDefault();
    listActive.previousElementSibling.textContent = text;
    listActive.classList.remove('dropdown__list_active');
}

//обработчик для кнопки меню
btn.forEach(element => {
    element.addEventListener('click', onClickMenu);
})

//обработчик для элемента меню
links.forEach(element => {
    element.addEventListener('click', onClickLink);
})
