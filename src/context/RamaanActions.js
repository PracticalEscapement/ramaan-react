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

export const getRestaurants = async () => {
  const response = await ramaan.get(`/restaurants.json`)
  return response.data.restaurants
}

export const addComment = async (e, post_id, commentData) => {
  e.preventDefault()
  const formattedData = {
    comment: {
      text: commentData.text, 
      likes: commentData.likes,
    }
  }
  const response = await ramaan.post(`posts/${post_id}/comments.json`, formattedData)
  return response
}

export const deleteComment = async (post_id, comment_id) => {
  const response = await ramaan.delete(`/posts/${post_id}/comments/${comment_id}`)
  return response
}