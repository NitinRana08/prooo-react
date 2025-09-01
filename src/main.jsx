// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'




const root = ReactDOM.createRoot(document.getElementById("root"))
root.reader(
      <provider store={store}>
            <App />
      </provider>

)