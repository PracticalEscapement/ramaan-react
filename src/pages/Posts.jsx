import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getPosts } from '../context/RamaanActions.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Post from './Post'

function Posts() {
  const { posts, loading, dispatch } = useContext(RamaanContext)

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getPostsArray = async() => {
      const postsArray = await getPosts()
      dispatch({type: 'GET_POSTS', payload: postsArray})
    }

    getPostsArray()
  }, [dispatch])

  //<Link to={`/post/${post.id}`}>{post.title}</Link>


  return (
    <div className='postsMainContainer'>
        <ul className='postsSidebar'>
            {posts.map((post) => (
              <li className='postsSidebarLink'>
                <Link to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      <div className='postsFeedContainer'>
        <ul className='postFeed'>
            <li className='postCard'>
              <div className='postCardImage'>
                <div className='postCardReview'>this better work</div>
              </div>
              <div className='postCardReview'>hello</div>
            </li>
            <li className='postCard'>
              <div className='postCardImage'>by</div>
              <div className='postCardReview'>goodbye</div>
            </li>
        </ul>
      </div>
    </div>
  )
}

Posts.protoTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts
