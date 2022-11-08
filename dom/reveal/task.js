const advert = Array.from(document.querySelectorAll('.reveal'))

function isVisible(elTop, elBottom) {
    return elBottom < 0||elTop > window.innerHeight ? false : true;  
}

document.addEventListener('scroll', () => {
    advert.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();
        isVisible(top, bottom) ? element.classList.add('reveal_active') : element.classList.remove('reveal_active');

    })
})
