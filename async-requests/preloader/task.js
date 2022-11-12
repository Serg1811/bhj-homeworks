


const imgLoader = document.querySelector('.loader');;
let items = document.querySelector('#items');
const h1 = document.querySelector('div[class=card] > h1');

getLocalStorageCurrency(); //Если есть данные в localStorage, выводим их

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onload = () => {
    const xhrResult = xhr.response;
    
    //Если есть в localStorage данные
    if (localStorage.getItem('currency')) {
        items.remove(); //Удаляем временные значения (из localStorage) со страницы
        createDivItems(); //Создаем div для хранения курсов валют
    };

    localStorage.setItem('currency', xhrResult); //Закидиваем/обновляем объект в localStorage (данные приходят в формате JSON)

    const xhrResultCurrency = JSON.parse(xhrResult); //Парсим данные с сервера в объект
    createCurrencyElements(xhrResultCurrency); //Выводим на страницу курсы валют
};

//Вывод курсов валют
function createCurrencyDiv(charCode, value) {
    const item = document.createElement('div');
    item.className = 'item';

    const itemCode = document.createElement('div');
    itemCode.className = 'item__code';
    itemCode.innerText = charCode;

    const itemValue = document.createElement('item__value');
    itemValue.className = 'item__value';
    itemValue.innerText = value;

    const itemCurrency = document.createElement('item__currency');
    itemCurrency.className = 'item__currency';
    itemCurrency.innerText = 'руб.';

    item.append(itemCode);
    item.append(itemValue);
    item.append(itemCurrency);
    items.append(item);
};

//Получение и вывод данных из localStorage
function getLocalStorageCurrency() {
    if (localStorage.getItem('currency')) {
        const xhrResultCurrency = JSON.parse(localStorage.getItem('currency'));
        createCurrencyElements(xhrResultCurrency);
    };    
};

//Создание общего div для дальнейшего вывода курсов валют (после очищения списка)
function createDivItems() {
    const item = document.createElement('div');
    item.id = 'items';
    h1.after(item);
    items = item;
};

//Перебор объекта с данными и вывод курсов валют
function createCurrencyElements(xhrResultCurrency) {
    //Вытаскиваем ключи через деструктуризацию
    const {Valute} = xhrResultCurrency.response;
    for (let key in Valute) {
        const {CharCode, Value} = Valute[key];
        createCurrencyDiv(CharCode, Value);
    };
    //Отключаем картинку загрузки в случае необходимости
    if (imgLoader.classList.contains('loader_active')) {
        imgLoader.classList.remove('loader_active');
    };
};