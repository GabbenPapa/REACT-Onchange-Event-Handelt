import { useState } from 'react'
import './App.css'
import MyComponents from './MyComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponents />
    </>
  )
}

export default App
