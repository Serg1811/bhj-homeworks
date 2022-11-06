const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function toggle(index) {
    tabs[index].classList.toggle('tab_active');
    tabContent[index].classList.toggle('tab__content_active');
}

function menu() {
    let indexActive = tabs.indexOf(document.querySelector('.tab_active'))
    tabs.forEach(element => {
        element.addEventListener('click', element => {
            let e = element.target;
            if (e !== tabs[indexActive]) {
                toggle(indexActive);
                indexActive = tabs.indexOf(e);
                toggle(indexActive);
            }
        })
    })
}

menu();