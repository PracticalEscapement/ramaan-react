const ramaanReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case 'GET_POST':
      return {
        ...state, 
        post: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
    return {
      ...state,
      loading: true,
    }
    default:
      return state
  }
}

export default ramaanReducer
