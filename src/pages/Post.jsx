import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState, useCallback } from 'react'
import RamaanContext from '../context/RamaanContext'
import CurrentUserContext from '../context/user/currentUserContext'
import { getPost } from '../context/RamaanActions.js'
import { 
  VStack, 
  Box, 
  Image, 
  Heading,
  Text,
  Flex,
  Avatar,
  Divider
} from '@chakra-ui/react'
import AddCommentForm from '../components/AddCommentForm'
import CommentObject from '../components/CommentObject'

function Post() {
  const { post, loading, dispatch} = useContext(RamaanContext)
  const { currentUser } = useContext(CurrentUserContext)
  const { title, review, image_url } = post

  

  const [comments, setComments] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)

  console.log(comments)
  
  const addNewComment = useCallback((newComment) => {
    console.log(newComment)
    setComments(comments.push(newComment))
    setButtonClicked(false)
  }, [comments])

  const params = useParams()

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getPostObject = async() => {
      const postObject = await getPost(params.id)
      setComments(postObject.comments)
      dispatch({type: 'GET_POST', payload: postObject})
    }

    getPostObject()
  }, [dispatch, params.id])

  const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  const handleClick = () => {
    setButtonClicked(true)
  }
  
  return (
    <>
      <VStack align={'center'} mt={12}>
        <Heading fontSize={'5xl'}>
          {title}
        </Heading>
        <Image 
          rounded={'lg'}
          height={500}
          width={900}
          objectFit={'cover'} 
          src={IMAGE} 
          alt='Restaurat Photo'
          shadow={'2xl'}
        />
        <Box w={'900px'}>
          <Text mt={5} fontSize={'lg'}>
            {review}
          </Text>
        </Box>

        <div className='addCommentsContainer'>
          {buttonClicked
            ? <AddCommentForm post_id={params.id} addNewComment={addNewComment} />
            : <button className='addCommentButton' onClick={handleClick}>Add a Comment</button>
          }
        </div>
      
        <VStack align={'right'}>
          <Divider mt={'15px'} />
          <Heading fontSize={'lg'} align={'center'} mb={'20px'}>Comments</Heading>

          <Box w={'800px'}>
            {comments.map((comment) => (
              <CommentObject key={comment.id} comment={comment} />
            ))}
          </Box>
        </VStack>
    
      </VStack>
    
    </>
  )
}

export default Post