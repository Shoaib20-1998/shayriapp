const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios');
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post('/shayari', async (req, res) => {
  const { message } = req.body;

  // Call the ChatGPT API here using Axios
  // Replace 'YOUR_API_KEY' with your actual ChatGPT API key
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  const reply = response.data.choices[0].message.content;
  res.json({ reply });
  } catch (error) {
    res.send(error)
  }
});

  app.get('/check',async(req,res)=>{

    try {
      res.send("hy")
    } catch (error) {
      res.send(error)
      
    }

  })


app.listen(8080,()=>{
    console.log("running")
})