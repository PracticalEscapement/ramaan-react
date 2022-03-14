import axios from 'axios'

const RAMAAN_URL = process.env.REACT_APP_RAMAAN_URL
  const ramaanUser = axios.create({
    withCredentials: true,
    baseURL: RAMAAN_URL,
  })

export const getCurrentUser = async() => {
  const currentUser = await ramaanUser.get('/current_user.json')
    return currentUser
}

export const signIn = async (e, formData) => {
  e.preventDefault()
  const formattedData = {
    api_v1_user: {
      email: formData.email,
      password: formData.password,
    }
  }
  const response = await ramaanUser.post('/users/sign_in.json', formattedData)
  return response
}

export const signOut = async () => {
  const response = await ramaanUser.delete(`/users/sign_out`)
  return response
}
