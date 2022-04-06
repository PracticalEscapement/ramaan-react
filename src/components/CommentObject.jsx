import { AiFillDelete } from 'react-icons/ai'
import { deleteComment } from '../context/RamaanActions'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import CurrentUserContext from '../context/user/currentUserContext'

import { 
  Box, 
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react'


function CommentObject({ comment }) {
  const params = useParams()
  const { currentUser } = useContext(CurrentUserContext)
  console.log(comment)

  const delComment = () => {
    const callDeleteComment = async () => {
      const response = await deleteComment(params.id, comment.id)
    }
    callDeleteComment()
  }

  return (
    <Flex mb={'5'}>
      <Avatar />
        <Box mr={10}>
          <Text ml={'5'}>{comment.user}</Text>
          <Text ml={'5'}>{comment.text}</Text>
        </Box>
        {comment.user_id === currentUser.id && 
          <AiFillDelete className='deleteCommentButton' onClick={delComment} />
        }
    </Flex>
  )
}

export default CommentObject