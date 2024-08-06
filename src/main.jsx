import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// require.config({
//   paths: {
//     'react': '../node_modules/react',
//     'react-dom': '../node_modules/react-dom',
//     'openai': '../node_modules/openai' // Adjust the path to where your openai library is located
//   }
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



