document.addEventListener('DOMContentLoaded', function () {
    const chatArea = document.querySelector('.chat-area');
    const userInput = document.querySelector('.user-text');
    const sendButton = document.querySelector('.send-button');
    const chatInterface = document.querySelector('.chat-interface');

    function addUserMessage(message) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerText = "You: " + message; 
        chatArea.appendChild(userMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function addBotMessage(message) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerText = "Acabot: " + message;
        chatArea.appendChild(botMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            addUserMessage(message);
            simulateBotResponse();
            userInput.value = '';
            userInput.style.height = '55px'; 
            if (!userInput.dataset.firstMessageSent) {
                chatInterface.style.backgroundImage = 'none'; 
                chatInterface.style.backgroundColor = '#ffffff'; 
                userInput.dataset.firstMessageSent = true;
            }
        }
    }

    function simulateBotResponse() {
        setTimeout(() => {
            const botResponse = 'Heyy, I am acabot. Nice to meet you!! Acabot is your companion for math. This reply is a const one because of frontend purposes. '; 
            addBotMessage(botResponse);
        }, 500);
    }

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});


