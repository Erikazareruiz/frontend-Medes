import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './Menu'
import Login from './Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
    <App />
  </StrictMode>,
)
