// DOMContentLoaded 이벤트는 문서의 초기 HTML이 완전히 로드된 후에 발생합니다.
// 이 이벤트 리스너 안에서 페이지의 요소들을 조작합니다.
document.addEventListener('DOMContentLoaded', () => {
    // 채팅 메시지를 표시할 영역을 선택합니다.
    const chatBox = document.getElementById('chatBox');
    // 사용자가 입력할 텍스트 필드를 선택합니다.
    const userInput = document.getElementById('userInput');
    // 사용자가 메시지를 보내는 버튼을 선택합니다.
    const sendButton = document.getElementById('sendButton');

    // 화면에 메시지를 표시하는 함수입니다.
    // isUser가 true면 사용자 메시지, false면 봇 메시지로 스타일을 적용합니다.
    function sendMessage(message, isUser = false) {
        // 새로운 div 요소를 생성하여 메시지를 담습니다.
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message'); // 기본 메시지 스타일 적용
        if (isUser) {
            messageDiv.classList.add('user-message'); // 사용자 메시지 스타일 추가
        } else {
            messageDiv.classList.add('bot-message'); // 봇 메시지 스타일 추가
        }
        // 메시지 텍스트를 div에 설정합니다.
        messageDiv.textContent = message;
        // 채팅 박스에 메시지를 추가합니다.
        chatBox.appendChild(messageDiv);
        // 채팅 박스의 스크롤을 가장 최근 메시지로 이동합니다.
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
