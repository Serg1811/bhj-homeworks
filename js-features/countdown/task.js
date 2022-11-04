const count = document.getElementById('timer')

countTime = new Date(count.textContent * 1000);

nIntervalID = setInterval(() => {

    h = String(countTime.getUTCHours()).padStart(2, '0');
    m = String(countTime.getUTCMinutes()).padStart(2, '0');
    s = String(countTime.getUTCSeconds()).padStart(2, '0');
    count.textContent = `${h}:${m}:${s}`

    countTime.setSeconds(countTime.getSeconds() - 1);

    if (countTime.getTime() < 0) {  
        alert("Вы победили в конкурсе!");
        // location.assign('https://bookshake.net/get-file/cbda9be6-fe21-47a6-a248-7f9e79d5a287?format=txt')
        clearInterval(nIntervalID);
    }
}, 1000)

