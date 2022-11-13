const textarea = document.getElementById('editor');
const text = localStorage.getItem('textarea');
const clearButton = document.querySelector('.clear-button');

if (text) {
    textarea.value = text;
};

textarea.addEventListener('input', e => {
    localStorage.setItem('textarea', e.currentTarget.value);
    if (textarea.value === '') {
        clearLocalStorage();
    }
});

clearButton.addEventListener('click', () => {
    textarea.value = '';
    clearLocalStorage();
});

function clearLocalStorage() {
    localStorage.removeItem('textarea');
};