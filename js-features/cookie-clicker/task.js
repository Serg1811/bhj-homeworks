let imgCookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed');
let time_1 = new Date();
imgCookie.onclick = () => {
    let time_2 = new Date();
    let clicks = ++clickerCounter.textContent;
    clickerSpeed.textContent = (1000/(time_2 - time_1)).toFixed(2);
    if (clicks % 2 == 0) {
        imgCookie.width += 50;
    } else {
        imgCookie.width -= 50;
    }
    time_1 = time_2;
}