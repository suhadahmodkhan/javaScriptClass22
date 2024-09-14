import { useState } from 'react'
import Home from "./Home"
import './App.css'

function App() {
  const name = "tanvir"

  return (
  <>
    <h1>Vite + React + new react</h1>
    <h2>this is heading</h2>
    <p>my name is {name}</p>
    <Home/>
  </>
)
}

export default App
