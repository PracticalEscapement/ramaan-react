import axios from 'axios'

const RAMAAN_URL = process.env.REACT_APP_RAMAAN_URL

const ramaan = axios.create({
  baseURL: RAMAAN_URL,
})

export const getPosts = async () => {
  const response = await ramaan.get('posts.json')
  return response.data.posts
}

export const getPost = async (id) => {
  const response = await ramaan.get(`/posts/${id}.json`)
  return response.data
}