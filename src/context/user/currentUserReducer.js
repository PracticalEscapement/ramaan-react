const currentUserReducer = (state, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        isSignedIn: true,
      }
    case 'SIGNED_OUT':
      return {
        ...state,
        currentUser: {},
        isSignedIn: false,
      }
    case 'SIGNED_IN':
      return {
        ...state,
        isSignedIn: true,
      }
    case 'NO_USER_PRESENT':
      return {
        ...state,
        currentUser: {},
        isSignedIn: false,
      }
    default: 
      return state

  }
}

export default currentUserReducer