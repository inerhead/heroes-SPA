import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroesApp from './heroesApp.jsx'
import { BrowserRouter } from "react-router";
import './style.css'


createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <HeroesApp/>
  </BrowserRouter>    
</StrictMode>,


  
)
