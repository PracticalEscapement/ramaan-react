import { createContext, useReducer, useState } from 'react'
import axios from 'axios'

const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

}