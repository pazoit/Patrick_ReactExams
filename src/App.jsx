import { useState } from 'react'
import './App.css'
import PostsManager from './Pages/PostsManager.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PostsManager/>
    </>
  )
}

export default App
