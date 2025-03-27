import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {
    /* El componente BrowserRouter envuelve al componente App
    lo que permite que toda mi App(desde cualquier componente)
    tienen acceso a las funciones del router*/
    }
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
