// import './App.css'
// import gptLogo from './assets/chatgpt.svg';
// import addBtn from './assets/add-30.png'
// import msgIcon from './assets/message.svg'
// import home from './assets/home.svg'
// import saved from './assets/bookmark.svg'
// import rocket from './assets/rocket.svg'
// import sendBtn from './assets/send.svg'
// import userIcon from './assets/user-icon.png'
// import gptImgLogo from './assets/chatgptLogo.svg'
// import fetchData from './openai'
// import { sendMsgToOpenAI } from './openai';
// import data from './openai'
// console.log(data)

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }



// fetchData() 

// function App(){
//   return (
//     <div className="App">
//         <div className="sideBar">
//           <div className="upperSide">
//             <div className="upperSideTop"> <img src={gptLogo} alt="logo" className="logo" /> <span className='brand'>ChatGPT</span> </div>
//             <button className='midBtn'> <img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
//             <div className="upperSideBottom">
//               <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
//               <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
//             </div>
//           </div>
//           <div className="lowerSide">
//             <div className="listItems"><img src={home} alt="Home" className='listitemsImg'/>Home</div>
//             <div className="listItems"><img src={saved} alt="Saved" className='listitemsImg'/>Saved</div>
//             <div className="listItems"><img src={rocket} alt="Rocket" className='listitemsImg'/>Upgrade to Pro</div>


//           </div>
//         </div>
//         <div className="main">
//           <div className="chats">
//             <div className="chat">
//               <img src={userIcon} alt="" className='chatImg'/><p className="txt">lorem20 hhhhhhhefaenaecunecncnuenecune</p>
//             </div>
//             <div className="chat bot">  {/* the class is both chat and bot*/}
//               <img src={gptImgLogo} alt="" className='chatImg' /><p className="txt">lorem20mmmoemmcopkoksokokfekf=0kkseofkoeskfoksofeksokfoksefokseofks-ekfoskfoskeokeofkoekefoskopfopdmpsmopjopeopsdckopdkopmpoopopkopfhe;;pe world w</p>
//             </div>

//           </div>
//           <div className="chatFooter">
//             <div className="inp">
//               <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="" /></button>
//             </div>
//             <p>ChatGPT may produce inaccurate information about people, places, or facts.</p>
//           </div>

//         </div>
//     </div>
//   )
// }

// export default App;



import './App.css'
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/goku.jpeg'

import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai.jsx';
import React, { useEffect, useState, useRef } from 'react';

// import { getText } from './openai';

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

function App(){

  const messagesEndRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Hi, I am your personal assistant. What can I do for you?",
    image: "",
    isBot: true,
  }]);


  useEffect (() => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, {
      text: text,
      image: "",
      isBot: false,
    }])
    const res= await sendMsgToOpenAI(text)  //async function let us use await
    setMessages([...messages, {
      text: text,
      image: "",
      isBot: false,
    }, {
      text: res,
      image: "",
      isBot: true,
    }])
  }


  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  const handleQuery = async (e) => {
    const text = e.target.value;
     setMessages([...messages, {
      text: text,
      image: "",
      isBot: false,
    }])
    const res= await sendMsgToOpenAI(text)  //async function let us use await
    setMessages([...messages, {
      text: text,
      image: "",
      isBot: false,
    }, {
      text: res,
      image: "",
      isBot: true,
    }])
  }

  return (
    <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"> <img src={gptLogo} alt="logo" className="logo" /> <span className='brand'>ChatGPT</span> </div>
            <button className='midBtn' onClick={()=>window.location.reload()}> <img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query" value={"How do I use this service?"} onClick={handleQuery}><img src={msgIcon} alt="Query" />How do I use this service?</button>
              <button className="query" value={"Find me the hottest trend."} onClick={handleQuery}><img src={msgIcon} alt="Query" />Find me the hottest trend.</button>
            </div>
          </div>
          <div className="lowerSide">
            <div className="listItems"><img src={home} alt="Home" className='listitemsImg'/>Home</div>
            <div className="listItems"><img src={saved} alt="Saved" className='listitemsImg'/>Saved</div>
            <div className="listItems"><img src={rocket} alt="Rocket" className='listitemsImg'/>Upgrade to Pro</div>


          </div>
        </div>
        <div className="main">
          <div className="chats">
  

          {messages.map((message, index) => (
            <div className={message.isBot ? "chat bot" : "chat"} key={index}>
              <img src={message.isBot ? gptImgLogo : userIcon} alt="" className='chatImg'/><p className="txt">{message.text}</p>
            </div>
          ))}

          <div ref={messagesEndRef}></div>

          </div>
          <div className="chatFooter">
            <div className="inp">
              {/* react stuff here, with useState and input*/}
              <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange = {(e) => {setInput(e.target.value)}}/> <button className="send" onClick={handleSend}> <img src={sendBtn} alt="" /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, places, or facts.</p>
          </div>

        </div>
    </div>
  )
}

export default App;
