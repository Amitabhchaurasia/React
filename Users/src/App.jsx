import { useState } from 'react'
import UserS from './UserS/UserS'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>This Is User`s</h1>
    <UserS/>
    </>
  )
}

export default App
