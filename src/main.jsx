import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomHook } from './components/CustomHook.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from './components/Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Posts />
    <CustomHook />
  
  </StrictMode>,
)
