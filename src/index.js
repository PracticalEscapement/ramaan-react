import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App'
import { CurrentUserProvider } from './context/user/currentUserContext'
import { ChakraProvider } from '@chakra-ui/react'


ReactDom.render(
  <React.StrictMode>
    <ChakraProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </ChakraProvider>
  </React.StrictMode>, 
  document.getElementById('root')
)