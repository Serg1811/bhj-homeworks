const form = document.forms.form;
const progress = document.querySelector('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(e) {
        const percent = +(e.loaded / e.total).toFixed(1);
        progress.value = percent;
      };
     
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
});