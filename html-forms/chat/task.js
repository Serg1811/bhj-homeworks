const chat = document.querySelector('div.chat-widget');
const chatArea = document.querySelector('div.chat-widget__messages-container');
const chatButton = document.querySelector('div.chat-widget__side');
const newMessage = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const answers = ['Кто здесь 🥴', 'Кто я 😱', 'Не шуми🤫 ','Я тя вижу 🧐', 'Шо опять?!', 'Ой всё...', 'Ага, бегу!', 'Ожидайте'];

chatButton.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');

    newMessage.addEventListener('change', () => {
        let time = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">
                    ${time.getHours()}:${time.getMinutes()}
                </div>
                <div class="message__text">
                    ${newMessage.value}
                </div>
            </div>
            <div class="message">
                <div class="message__time">
                    ${time.getHours()}:${time.getMinutes()}
                </div>
                <div class="message__text">
                    ${answers[Math.floor(Math.random() * answers.length)]}
                </div>
            </div>
        `;
        newMessage.value = '';
        chatArea.scrollBy(0, chatArea.getBoundingClientRect().bottom);
    })
})