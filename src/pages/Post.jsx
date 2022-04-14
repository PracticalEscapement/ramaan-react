import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState, useCallback } from 'react'
import RamaanContext from '../context/ramaan/RamaanContext'
import { getPost } from '../context/ramaan/RamaanActions'
import Spinner from '../components/assests/Spinner'
import AddCommentForm from '../components/addCommentForm/AddCommentForm'
import CommentsList from '../components/comments/CommentsList'
import { 
  VStack, 
  Box, 
  Image, 
  Heading,
  Text
} from '@chakra-ui/react'


function Post() {
  const { post, loading, dispatch} = useContext(RamaanContext)
  const { title, review, image_url } = post
  const params = useParams()

  const [comments, setComments] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)
  
  const addNewComment = useCallback((newComment) => {
    setComments([...comments, newComment])
    setButtonClicked(false)
  }, [comments])

  const removeComment = useCallback((removedComment) => {
    const updatedComments = comments.filter(comment => comment.id !== removedComment.id)
    console.log(updatedComments)
    setComments([updatedComments])
  }, [comments])

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})
    const getPostObject = async() => {
      const postObject = await getPost(params.id)
      dispatch({type: 'GET_POST', payload: postObject})
      setComments(postObject.comments)
    }

    getPostObject()
  }, [dispatch, params.id])

  const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  if (loading) {
    return <Spinner />
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
          <Text fontSize={'lg'}>
            {review}
          </Text>
        </Box>

        <div className='addCommentsContainer'>
          {buttonClicked
            ? <AddCommentForm 
                post_id={params.id} 
                addNewComment={addNewComment}
                unclickButton={() => setButtonClicked(false)}
              />
            : <button 
                className='addCommentButton' 
                onClick={() => setButtonClicked(true)}>
                  Add a Comment
              </button>
          }
        </div>
        
        <CommentsList comments={comments} onRemove={removeComment} />
        
    
      </VStack>
    
    </>
  )
}

export default Post