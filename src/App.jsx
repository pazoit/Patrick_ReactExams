import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Postsmanager from './components/Postsmanager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Postsmanager/>
    </>
  )
}

export default App
