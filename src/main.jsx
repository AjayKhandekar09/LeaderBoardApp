import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LeaderBoardTable } from './components/Table.components.jsx'
// import { data } from '../srsc/data.json'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <LeaderBoardTable></LeaderBoardTable> */}
  </React.StrictMode>,
)
