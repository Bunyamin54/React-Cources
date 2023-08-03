import { useState } from 'react'

import './App.css'
import Typo from './components/Typo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typo/>
    </>
  )
}

export default App
