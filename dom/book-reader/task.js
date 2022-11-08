let active = [];
const bookClass = [
    ['book_fs-small', ,'book_fs-big'],
    ['book_color-black','book_color-gray','book_color-whitesmoke'],
    ['book_bg-black','book_bg-gray','book_bg-white'],
];
const bookControls = Array.from(document.querySelectorAll(".book__control")).map(item => {
    result = Array.from(item.querySelectorAll("a"));
    active.push(activeControls(result))
    return result;
})
const book = document.querySelector(".book");

function activeControls(arr) {
    let id = arr.findIndex(item => item.className.includes('_active'));
    let classList = Array.from(arr[id].classList);
    return {'id': id, 'toggle': classList.pop()};
}

//обработка события
bookControls.forEach((item, idGroup) => {
    item.forEach((item, id) => {
        item.addEventListener('click', event => {
            event.preventDefault()        
            if(active[idGroup].id !== id) {
                bookControls[idGroup][active[idGroup].id].classList.remove(active[idGroup].toggle);
                event.target.classList.add(active[idGroup].toggle);
                bookClass[idGroup].forEach((item, idBook) => (idBook === id) ? book.classList.add(item) : book.classList.remove(item))             
                active[idGroup].id = id;
            }
        })            
    })
})
