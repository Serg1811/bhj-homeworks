// const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
// const xhr = new XMLHttpRequest();
// const answersSet = document.querySelector('.poll__answers');
// const question = document.querySelector('.poll__title');

// xhr.open('GET', url);
// xhr.send();

// xhr.addEventListener('readystatechange', () => {
//     if(xhr.readyState === xhr.DONE) {        
//         let data = JSON.parse(xhr.responseText);        
//         let answers = data.data.answers;

//         question.insertAdjacentText('afterbegin', data.data.title);
        
//         for(let i = 0; i < answers.length; i++) {
//             answersSet.insertAdjacentHTML('beforebegin', `<button class="poll__answer">
//             ${answers[i]}
//           </button>` );
//         }

//         let buttons = document.querySelectorAll('.poll__answer');
               
//         for(let button of buttons) {
//             button.addEventListener('click', event => {
//                 alert('Спасибо, ваш голос засчитан!');
//                 event.preventDefault();
//             })
//         }
//     }
// })


const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let questionId = 0;
let answerId = 0;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', () => {
    const xhrResponse = xhr.response;
    questionId = xhrResponse.id; //Получили id вопроса
    setPollItems(xhrResponse);
});

function setPollItems(xhrResponse) {
    pollTitle.innerText = xhrResponse.data.title;
    const answersArr = xhrResponse.data.answers;

    //Обработчик на div с делегированием события
    pollAnswers.addEventListener('click', function(event) {
        if (event.target.className === 'poll__answer') {
            const answerText = event.target.innerText;
            const answerId = answersArr.indexOf(answerText);
            alert('Спасибо, ваш голос засчитан!');      
            getPollAnswers();               
        };
    });
    
    for (let item in answersArr) {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.innerText = answersArr[item];
        pollAnswers.append(button);
    };
};

function getPollAnswers() {
    const xhrPost = new XMLHttpRequest;
    xhrPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrPost.responseType = 'json';
    xhrPost.send(`vote=${questionId}&answer=${answerId}`);
    xhrPost.addEventListener('load', () => {
        pollAnswers.remove(); //Удаляем кнопки с ответами
        const xhrPostResponse = xhrPost.response.stat;

        //Считаем общую сумму всех голосов
        let sumAllVotes = 0; 
        for (let item of xhrPostResponse) {
            sumAllVotes += item.votes;
        };

        //Выводим значения (будем выводить списком)
        const answers = document.createElement('div');
        answers.className = 'poll__answers poll__answers_active';
        answers.id = 'poll__answers';
        pollTitle.after(answers);

        const ulAnswers = document.createElement('ul');
        answers.append(ulAnswers);

        for (let item of xhrPostResponse) {
            let itemPercent = +(item.votes / (sumAllVotes * 0.01)).toFixed(2); //Считаем процент

            //Создаем элементы для вывода на страницу
            const answer = document.createElement('li');
            answer.innerHTML = `${item.answer}: ${itemPercent}%`
            ulAnswers.append(answer);
        };
    });
};