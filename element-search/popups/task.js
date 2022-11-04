const el1 = document.getElementById('modal_main');
const el2 = document.getElementById('modal_success');
const closeSigns = document.querySelectorAll('.modal__close_times');

el1.classList.add('modal_active');

const btn = document.querySelector('.btn');

btn.onclick = () => {
    el1.classList.remove('modal_active');
    el2.classList.add('modal_active');

}
 
closeSigns.forEach(element => {
    element.onclick = function () {
        this.closest('.modal_active').classList.remove('modal_active');
    }
})