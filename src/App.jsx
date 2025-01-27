import { useState } from 'react'
import './App.css'
import Nav, { LandingPage } from './Component/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LandingPage/>
      </div>
    </>
  )
}

export default App
