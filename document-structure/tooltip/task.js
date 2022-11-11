const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltips.forEach((el) => {
        el.insertAdjacentHTML('afterEnd', `<div class="tooltip">${el.title}</div>`);
        el.nextElementSibling.style.position = "absolute";
        el.nextElementSibling.style.left = `${el.getBoundingClientRect().left}px`;
});

hasTooltips.forEach((el) => {
    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        el.nextElementSibling.classList.toggle('tooltip_active');
    });
});