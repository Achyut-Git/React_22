import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(0)
  const [number, setNumber] = useState(true)
  const [character, setCharacter] = useState(true);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null)
  

  //Generate password
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(number){
   str += "0123456789";
  }
  if(character){
    str += "!@#$%^&*()_-+={[}]|/?><~"
  }
  for(let i = 0; i<length; i++){
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  };
  setPassword(pass);
}, [length, number, character]);


//Copy password using useRef
const copyPassowrd = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
window.navigator.clipboard.writeText(password)
}, [password])

useEffect(()=>{
  passwordGenerator();
}, [length, number, character]);

// function copyPassowrd(){
//   if(!password){
//     alert('nothing to copy')
//   }else{
//     navigator.clipboard.writeText(password)
//   }
// }

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-16 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-1'>Password Generator</h1>
     <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
     <input type="text" id='box' value={password}className='outline-none w-full py-1 px-3 rounded' placeholder='Password' readOnly ref={passwordRef}/>
     <button className='outline-none bg-blue-700 px-3 shrink-0 py-0.5 rounded' onClick={copyPassowrd}>Copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap=x-1'>
        <input type="range" min={6} max={20} value={length} className='cursor-pointer color-blue mx-1'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length} </label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={number}
      id='numberInput'
      onChange={()=>{
        setNumber((prev)=> !prev )
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={character}
      id='characterInput'
      onChange={()=>{
        setCharacter((prev)=> !prev )
      }}
      />
      <label htmlFor="characterrInput">Characters</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
