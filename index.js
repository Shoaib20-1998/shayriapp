const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios');
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post('/shayri', async (req, res) => {
    try {
      const { message } = req.body; // Assuming you're receiving the user's message in the request body
      // Make the API request to ChatGPT
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      // Return the API response to the client
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


app.listen(8080,()=>{
    console.log("running")
})