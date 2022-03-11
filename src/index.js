import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App'
import { CurrentUserProvider } from './context/user/currentUserContext'


ReactDom.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>, 
  document.getElementById('root')
)