// const OpenAI = require("openai");

// const apiKey = import.meta.REACT_APP_API_KEY;
// const openai = new OpenAI({ apiKey: apiKey });

// export async function sendMsgToOpenAI(message) {
//   const request = await openai.chat.completions.create({
//     messages: [
//       // {
//       //   "role": "system",
//       //   "content": "You are a helpful assistant."
//       // },
//       {
//         role: "user",
//         content: message,
//       },
//     ],
//     model: "gpt-3.5-turbo",
//     temperature: 0.7, // How creative your answer
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0, // Corrected typo
//   });

//   console.log(request.choices[0].message.content);
// }

// sendMsgToOpenAI("Do you know Furina from Genshin Impact?");

import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.REACT_APP_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function sendMsgToOpenAI(text) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: text,
          },
        ],
      },
    ],
    max_tokens: 500,
  });

  return String(response.choices[0].message.content);
}
