import axios from 'axios'

const RAMAAN_URL = process.env.REACT_APP_RAMAAN_URL

const ramaan = axios.create({
  withCredentials: true,
  baseURL: RAMAAN_URL,
})

export const getPosts = async () => {
  const response = await ramaan.get('/posts.json')
  return response.data.posts
}

export const getPost = async (id) => {
  const response = await ramaan.get(`/posts/${id}.json`)
  return response.data
}

export const signIn = async (e, formData) => {
  e.preventDefault()
  const formattedData = {
    api_v1_user: {
      email: formData.email,
      password: formData.password,
    }
  }
  const response = await ramaan.post('/users/sign_in.json', formattedData)
  console.log(`sign_in: ${response.status}`)
}
