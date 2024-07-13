import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-lime-400 text-black rounded-xl p-4'>Tailwind</h1>
     <Card username={"Hello"} btnText={"Visit Now"}/>
     <Card username={"Bye"} btnText={"Click Here"}/>
     <Card/>
    </>
  )
}

export default App
