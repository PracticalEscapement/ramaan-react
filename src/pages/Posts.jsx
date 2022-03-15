import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getPosts } from '../context/RamaanActions.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PostPreview from '../components/PostPreview'


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

  return (
    <div className='postsMainContainer'>
        <ul className='postsSidebar'>
            {posts.map((post) => (
              <li key={post.id} className='postsSidebarLink'>
                <Link to={`/post/${post.id}`} className='postLink'>
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      <div className='postsFeedContainer'>
        <ul className='postFeed'>
          {posts.map((post) => (
            <li className='postCard'>
              <PostPreview key={post.id} post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Posts.protoTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts
