import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Singlecard from './components/singlecard.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,
  <Singlecard></Singlecard>
)
