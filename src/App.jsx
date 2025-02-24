import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetchproducts from './components/fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fetchproducts></Fetchproducts>
    </>
  )
}

export default App
