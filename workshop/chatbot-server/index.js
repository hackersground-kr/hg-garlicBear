import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// 정적 파일을 제공할 디렉토리 설정
app.use(express.static(path.join(__dirname, 'my-web')));

app.post('/api/message', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch('https://garlicBear-openai-resource.openai.azure.com/v1/engines/gpt-4/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
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