// // /*npm i openai to install openai*/
// const apiKey = import.meta.REACT_APP_API_KEY; 

// // // async function fetchData(){
// // //   const response = await fetch("http://api.openai.com/v1/completions", {
// // //     method: "Post",
// // //     headers: {
// // //       Authorization: `Bearer ${apiKey}`,//to put in code we add ${}

// // //     },
// // //     body: JSON.stringify({
// // //       model: "text-davinci-003",
// // //       prompt: "hello, how are you today?",
// // //       max_tokens: 256
// // //     })
// // //   })
// // // }

// // // const data = await response.json() //response is async so we need to await

// // // console.log(data)

// // // export default fetchData;

// // require.config({
// //   paths: {
// //     'react': '../node_modules/react',
// //     'react-dom': '../node_modules/react-dom',
// //     'openai': '../node_modules/openai' // Adjust the path to where your openai library is located
// //   }
// // });



// import { Configuration, OpenAIApi } from 'openai';

// // Replace 'your-api-key' with your actual API key, or use environment variables/config files.

// const configuration = new Configuration({ apiKey });

// const openai = new OpenAIApi(configuration); // Instance of OpenAI

// export async function sendMsgToOpenAI(message) {
//   try {
//     const request = await openai.createCompletion({
//       model:  "text-davinci-003",
//       prompt: message,
//       temperature: 0.7, // How creative your answer
//       max_tokens: 256,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0 // Corrected typo
//     });

//     return request.data.choices[0].text;
//   } catch (error) {
//     console.error('Error sending message to OpenAI:', error);
//     throw error; // Re-throw the error for handling by the caller
//   }
// }


// const OpenAI = require("openai")

// const apiKey = import.meta.REACT_APP_API_KEY;

// const openai = new OpenAI({apiKey: apiKey}) //OpenAI is a constructor so you need to use new

// async function getText(){
//   const completion = openai.chat.completions.create({
//     messages: [
//       {
//         "role": "system",
//         "content": "You are a helpful assistant."
//       },
//       {
//         "role": "user",
//         "content": "what color is the sky?"
//       }
//     ],
//     model: "gpt-3.5-turbo"
//   })
//   console.log(completion)
// }

// module.exports = getText;



import * as dotenv from "dotenv";

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(text) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
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
