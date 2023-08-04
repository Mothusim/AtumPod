import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { AudioPlayerProvider } from './components/AudiioPlayerContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </React.StrictMode>,
)
