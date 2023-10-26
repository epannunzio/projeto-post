import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' 

ReactDOM.createRoot(document.getElementById('root')!).render( //esse ponto de exclamação afirma que o elemento existe, sem ele daria erro
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
