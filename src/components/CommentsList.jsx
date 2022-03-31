import CommentObject from '../components/CommentObject'
import { 
  VStack, 
  Box,
  Heading,
  Divider
} from '@chakra-ui/react'

function CommentsList({ comments }) {

  return (
    <VStack align={'right'}>
    <Divider mt={'15px'} />
    <Heading fontSize={'lg'} align={'center'} mb={'20px'}>Comments</Heading>

    <Box w={'800px'}>
      {comments.map((comment) => (
        <CommentObject key={comment.id} comment={comment} />
      ))}
    </Box>
    </VStack>
  )
}

export default CommentsList