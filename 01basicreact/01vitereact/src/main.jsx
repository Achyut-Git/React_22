import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return <h1>Custom React App</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Chai/>
    <MyApp />
</>
)
