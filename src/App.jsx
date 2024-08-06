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
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
// import { getText } from './openai';

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

function App(){

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res= await sendMsgToOpenAI(input)  //async function let us use await
    console.log(res)
  }


  return (
    <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"> <img src={gptLogo} alt="logo" className="logo" /> <span className='brand'>ChatGPT</span> </div>
            <button className='midBtn'> <img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
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
            <div className="chat">
              <img src={userIcon} alt="" className='chatImg'/><p className="txt">lorem20 hhhhhhhefaenaecunecncnuenecune</p>
            </div>
            <div className="chat bot">  {/* the class is both chat and bot*/}
              <img src={gptImgLogo} alt="" className='chatImg' /><p className="txt">lorem20mmmoemmcopkoksokokfekf=0kkseofkoeskfoksofeksokfoksefokseofks-ekfoskfoskeokeofkoekefoskopfopdmpsmopjopeopsdckopdkopmpoopopkopfhe;;pe world w</p>
            </div>

          </div>
          <div className="chatFooter">
            <div className="inp">
              {/* react stuff here, with useState and input*/}
              <input type="text" placeholder='Send a message' value={input} onChange = {(e) => {setInput(e.target.value)}}/> <button className="send" onClick={handleSend}> <img src={sendBtn} alt="" /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, places, or facts.</p>
          </div>

        </div>
    </div>
  )
}

export default App;
