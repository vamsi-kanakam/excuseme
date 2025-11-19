import express from 'express';
import OpenAI from 'openai';

const app = express();
app.use(express.json());

const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.post('/api/excuse', async (req, res) => {
    const { tone, scenario, desc } = req.body;
    try{
        const response = await client.responses.create({
            model: "gpt-5.1",
            reasoning: { effort: "low" },
            instructions: `You are a professional world-class excuse maker who never got doubted of making an excuse in his/her entire life.
                        Whether it's in a professional or office setting, in school/university in relattionships, even when making funny excuses people belive it as real for a moment.`,
            input: `Create a convincing excuse in ${tone} tone for the ${scenario} scenario with in depth context: ${desc}.`,
        });
        res.json({ excuse: response.output_text.trim() });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to establish connection with OpenAI' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});