import { useContext, useEffect } from 'react'
import RamaanContext from '../context/ramaan/RamaanContext'
import { getPosts } from '../context/ramaan/RamaanActions.js'
import PropTypes from 'prop-types'
import PostPreview from '../components/PostPreview'
import { Container, Center } from '@chakra-ui/react'

function Posts() {
  const { posts, post, loading, dispatch } = useContext(RamaanContext)

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getPostsArray = async() => {
      const postsArray = await getPosts()
      dispatch({type: 'GET_POSTS', payload: postsArray})
    }

    getPostsArray()
  }, [dispatch])

  return (
    <Center>
      <Container maxW='6xl' mt={5}>
        {posts.map((post) => (
         <PostPreview key={post.id} post={post} />
        ))}
      </Container>
    </Center>
  )
}

Posts.protoTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts
