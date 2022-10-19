import { createContext, useReducer} from 'react'
import currentUserReducer from './currentUserReducer'

const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
  const initialState = {
    currentUser: {},
  }

  const [state, dispatch] = useReducer(currentUserReducer, initialState)

  return (
    <CurrentUserContext.Provider 
      value={{
        ...state, 
        dispatch,
      }}>
        {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserContext