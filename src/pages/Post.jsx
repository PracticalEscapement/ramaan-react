import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getPost } from '../context/RamaanActions.js'
import { 
  VStack, 
  Box, 
  Image, 
  Heading,
  Text
} from '@chakra-ui/react'

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

  const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  return (
    <VStack align={'center'} mt={12}>
      <Heading fontSize={'5xl'}>
        {title}
      </Heading>
      <Image 
        rounded={'lg'}
        height={400}
        width={700}
        objectFit={'cover'} 
        src={IMAGE} 
        alt='Restaurat Photo' 
      />
      <Box w={'700px'}>
        <Text mt={5} fontSize={'lg'}>
          {review}
        </Text>
      </Box>
    </VStack>
  )
}

export default Post