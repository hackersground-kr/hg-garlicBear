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

    // 서버에 사용자 메시지를 보내고 봇의 응답을 받는 비동기 함수입니다.
    async function getBotResponse(userMessage) {
        try {
            // 서버에 POST 요청을 보내봅니다.
            const response = await fetch('http://localhost:3000/api/message', {
                method: 'POST', // HTTP 메서드는 POST입니다.
                headers: {
                    'Content-Type': 'application/json' // 요청 본문은 JSON 형식입니다.
                },
                body: JSON.stringify({ message: userMessage }) // 사용자 메시지를 JSON 형식으로 전송합니다.
            });

            // 응답이 정상적이지 않으면 에러를 발생시킵니다.
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // 응답 데이터를 JSON으로 파싱합니다.
            const data = await response.json();
            // 봇의 응답 메시지를 반환합니다. 없으면 기본 메시지를 반환합니다.
            return data.reply || "Sorry, I don't understand.";
        } catch (error) {
            // 에러가 발생한 경우, 콘솔에 에러를 기록하고 기본 오류 메시지를 반환합니다.
            console.error('Error fetching data:', error);
            return "Sorry, there was an error.";
        }
    }

    // 사용자가 메시지를 전송하는 함수입니다.
    async function handleSend() {
        // 사용자 입력 필드에서 텍스트를 가져와서 공백을 제거합니다.
        const message = userInput.value.trim();
        // 메시지가 비어 있지 않으면 다음 작업을 수행합니다.
        if (message) {
            // 사용자가 보낸 메시지를 화면에 표시합니다.
            sendMessage(message, true);
            // 입력 필드를 비웁니다.
            userInput.value = '';
            // 봇의 응답을 기다리고 화면에 표시합니다.
            const botResponse = await getBotResponse(message);
            sendMessage(botResponse); // 봇의 응답을 화면에 표시합니다.
        }
    }

    // 전송 버튼을 클릭할 때 handleSend 함수를 호출합니다.
    sendButton.addEventListener('click', handleSend);

    // 사용자 입력 필드에서 Enter 키를 누를 때도 handleSend 함수를 호출합니다.
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
});
