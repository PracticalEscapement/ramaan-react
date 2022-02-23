import { createContext, useReducer} from 'react'
import ramaanReducer from './RamaanReducer'

const RamaanContext = createContext()

export const RamaanProvider = ({children}) => {
  const initialState = {
    posts: [],
    post: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(ramaanReducer, initialState)

  return (
    <RamaanContext.Provider 
      value={{
        ...state,
        dispatch,
    }}>
      {children}
    </RamaanContext.Provider>
  )
}

export default RamaanContext