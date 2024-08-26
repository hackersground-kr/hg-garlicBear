document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function sendMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUser) {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function getBotResponse(userMessage) {
        try {
            // ChatGPT API 호출
            const response = await fetch('https://garlicbear-openai-resource.openai.azure.com/', { // 여기에 실제 API URL을 입력하세요
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 8de4b1d1dd974a1c97e7b9be1f87298b' // 여기에 실제 API 키를 입력하세요
                },
                body: JSON.stringify({ message: userMessage })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.reply || "Sorry, I don't understand.";
        } catch (error) {
            console.error('Error fetching data:', error);
            return "Sorry, there was an error.";
        }
    }

    async function handleSend() {
        const message = userInput.value.trim();
        if (message) {
            sendMessage(message, true);
            userInput.value = '';
            const botResponse = await getBotResponse(message);
            sendMessage(botResponse);
        }
    }

    sendButton.addEventListener('click', handleSend);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
});
