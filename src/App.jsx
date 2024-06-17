import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 fetch("https://pokeapi.co/api/v2/pokemon")
 .then((response)=>response.json())
 .then((data)=> console.log(data))
 .catch((error)=>console.log(error))



  return (
    <>
      
    <h1>hola mundo</h1>
     
    </>
  )
}

export default App
