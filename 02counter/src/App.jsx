import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

let [counter, setCounter] = useState(0)

let vlaue = null;
  // let counter = 1;

  function addValue(){

    if(counter >=0 && counter < 20){
      counter++
    setCounter(counter)
    }
}
  
  function removeValue(){
    if(counter >0 ){
      counter--
    setCounter(counter)
    }
  }

  return (
    <>
   <h1>Chai aur React{counter}</h1>
   <h2>Counter value: {counter}</h2>
   <button onClick={addValue}>Add Value</button>{counter}
   <button onClick={removeValue}>Remove Value</button>
   {counter}
    </>
  )
}

export default App
