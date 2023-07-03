const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios');
require("dotenv").config();

app.use(cors());
app.use(express.json());

// app.get('/codeconvert', async (req, res) => {
//   try {
//     const keyword = req.query.keyword;
//     const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
//       prompt: `Shayari about ${keyword}`,
//       max_tokens: 100,
//       temperature: 0.7,
//       n: 1
//     }, {
//       headers: {
//         'Authorization': `Bearer ${process.env.apiKey}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     const shayari = response.data.choices[0].text.trim();
//     res.json({ shayari });
//   } catch (error) {
//     console.error('Error:', error.response.data);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

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
  console.log(reply)
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


app.post('/convertor', async (req, res) => {
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
  console.log(reply)
  res.json({ reply });
  } catch (error) {
    res.send(error)

  }
});


app.post('/debuger', async (req, res) => {
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
  console.log(reply)
  res.json({ reply });
  } catch (error) {
    res.send(error)

  }
});

app.post('/check', async (req, res) => {
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
  console.log(reply)
  res.json({ reply });
  } catch (error) {
    res.send(error)

  }
});


  

app.listen(8080,()=>{
    console.log("running")
})