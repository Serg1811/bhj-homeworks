const rotatorCaseArray = Array.from(document.querySelectorAll('.rotator__case'));
let count = 0;

function rotator() {
    rotatorCaseArray[count].classList.toggle('rotator__case_active');
    count = count < rotatorCaseArray.length - 1 ? ++count : 0;
    rotatorCaseArray[count].classList.toggle('rotator__case_active');
}

setInterval(rotator, 1000);
