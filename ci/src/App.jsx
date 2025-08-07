import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Calculator'

function App() {
const arr = [1,2]
  return (
    <>
      <Calculator arr={arr}/>
    </>
  )
}

export default App
