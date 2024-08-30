import { useState } from 'react'
import './App.css'

import Hero from './Hero'
import Navigation from './Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Hero/>
    </>
  )
}

export default App
