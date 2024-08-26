// express 모듈을 가져옵니다. Express는 웹 서버를 만들기 위한 프레임워크입니다.
import express from 'express';
// body-parser 모듈을 가져옵니다. JSON 요청 본문을 파싱하는 데 사용됩니다.
import bodyParser from 'body-parser';
// node-fetch 모듈을 가져옵니다. HTTP 요청을 보내는 데 사용됩니다.
import fetch from 'node-fetch';
// dotenv 모듈을 가져옵니다. 환경 변수 파일(.env)에서 설정을 로드합니다.
import dotenv from 'dotenv';
// cors 모듈을 가져옵니다. Cross-Origin Resource Sharing을 처리합니다.
import cors from 'cors';
// path 모듈을 가져옵니다. 파일 및 디렉토리 경로를 조작합니다.
import path from 'path';
// fileURLToPath 모듈을 가져옵니다. ES 모듈에서 __dirname을 사용하기 위해 필요합니다.
import { fileURLToPath } from 'url';

// 현재 파일의 URL을 경로로 변환합니다.
const __filename = fileURLToPath(import.meta.url);
// 현재 파일의 디렉토리 경로를 구합니다.
const __dirname = path.dirname(__filename);

// .env 파일에 있는 환경 변수를 로드합니다.
dotenv.config();

// Express 애플리케이션을 생성합니다.
const app = express();
// 서버가 사용할 포트를 설정합니다. (포트 3000)
const port = 3000;

// CORS를 활성화하여 다른 출처에서의 요청을 허용합니다.
app.use(cors());
// 요청 본문을 JSON으로 파싱합니다.
app.use(bodyParser.json());

// 정적 파일을 제공할 디렉토리를 설정합니다. (my-web 폴더)
app.use(express.static(path.join(__dirname, 'my-web')));

// 클라이언트가 POST 요청을 보낼 수 있는 엔드포인트를 정의합니다.
app.post('/api/message', async (req, res) => {
    // 클라이언트로부터 받은 메시지를 요청 본문에서 추출합니다.
    const { message } = req.body;

    try {
        // OpenAI API에 POST 요청을 보냅니다.
        const response = await fetch('https://garlicbear-openai-resource.openai.azure.com/v1/engines/gpt-4/completions', {
            method: 'POST', // 요청 방법은 POST입니다.
            headers: {
                'Content-Type': 'application/json', // 요청 본문은 JSON 형식입니다.
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // API 키를 Authorization 헤더에 포함합니다.
            },
            body: JSON.stringify({
                prompt: message, // 클라이언트로부터 받은 메시지를 prompt로 설정합니다.
                max_tokens: 150 // 생성할 응답의 최대 토큰 수를 설정합니다.
            })
        });

        // 응답이 정상적이지 않으면 에러를 발생시킵니다.
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // 응답 데이터를 JSON으로 파싱합니다.
        const data = await response.json();
        // 응답 데이터에서 생성된 텍스트를 클라이언트에게 반환합니다.
        res.json({ reply: data.choices[0].text.trim() });
    } catch (error) {
        // 오류가 발생한 경우, 콘솔에 오류를 기록하고 클라이언트에게 오류 메시지를 반환합니다.
        console.error('Error fetching data:', error);
        res.status(500).json({ reply: "Sorry, there was an error." });
    }
});

// 서버를 시작하고 포트 3000에서 요청을 수신 대기합니다.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});