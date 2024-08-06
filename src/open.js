const OpenAI = require("openai");

const apiKey = import.meta.REACT_APP_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

export async function sendMsgToOpenAI(message) {
  const request = await openai.chat.completions.create({
    messages: [
      // {
      //   "role": "system",
      //   "content": "You are a helpful assistant."
      // },
      {
        role: "user",
        content: message,
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.7, // How creative your answer
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0, // Corrected typo
  });

  console.log(request.choices[0].message.content);
}

sendMsgToOpenAI("Do you know Furina from Genshin Impact?");
