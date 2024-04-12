import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LeaderBoardTable } from './components/Table.components'
import data from './data.json'
function App() {
    return (
        <>
        <h1 className='text-neaveyBlue underline mb-5'>Leader<span className='text-darkBlue italic underline'>Board</span></h1>
        <LeaderBoardTable></LeaderBoardTable>
        </>
    )
}

export default App
