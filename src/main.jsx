import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter } from 'react-router-dom';

// console.log = console.warn = console.error = () => {}; joogo all the error and warning 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />

  </BrowserRouter>,
)