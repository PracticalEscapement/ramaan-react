import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getPost } from '../context/RamaanActions.js'

function Post() {
  const { post, loading, dispatch} = useContext(RamaanContext)

  const {title, review, image_url} = post

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
    <div className='postShowMainContainer'>
      <div>
        <div className='postCard'>{title}</div>
        <div className='postCard'>{review}</div>
        <div className='postCardImageContainer'>
          <img src={image_url} alt="Restaurant Image" className='postCardImage' />
        </div>
      </div>
    </div>
  )
}

export default Post