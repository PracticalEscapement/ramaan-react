import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getPost } from '../context/RamaanActions.js'

function Post() {
  const { post, loading, dispatch} = useContext(RamaanContext)

  const {title, review} = post

  const params = useParams()

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getPostObject = async() => {
      const postObject = await getPost(params.id)
      dispatch({type: 'GET_POST', payload: postObject})
    }

    getPostObject()
  }, [dispatch])

  return (
    <>
      <div>{title}</div>
      <div>{review}</div>
    </>
  )
}

export default Post