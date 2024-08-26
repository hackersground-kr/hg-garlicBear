async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatlog = document.getElementById("chatlog");

    // 사용자가 입력한 메시지를 채팅 로그에 추가
    chatlog.innerHTML += `<p><strong>사용자:</strong> ${userInput}</p>`;

    // ChatGPT API 호출
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    
    const response = await fetch(proxyUrl + apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{"role": "user", "content": userInput}]
        })
    });

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    // 챗봇의 응답을 채팅 로그에 추가
    chatlog.innerHTML += `<p><strong>챗봇:</strong> ${botResponse}</p>`;

    // 입력 필드 초기화
    document.getElementById("userInput").value = '';
}