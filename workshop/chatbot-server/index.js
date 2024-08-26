// index.js 또는 서버 파일
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch('https://garlicbear-openai-resource.openai.azure.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // 서버 환경 변수에서 API 키 가져오기
            },
            body: JSON.stringify({
                model: 'text-davinci-003', // 또는 사용하는 모델의 ID
                prompt: message,
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.json({ reply: data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ reply: "Sorry, there was an error." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});