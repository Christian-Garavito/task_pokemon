import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BuscarPokemon from './components/Buscar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BuscarPokemon />
  </React.StrictMode>,
)
