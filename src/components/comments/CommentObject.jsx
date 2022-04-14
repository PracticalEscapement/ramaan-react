import { AiFillDelete } from 'react-icons/ai'
import { useContext, useState } from 'react'
import CurrentUserContext from '../../context/user/currentUserContext'
import { 
  Box, 
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react'


function CommentObject({ comment, onDelete }) {
  const { currentUser } = useContext(CurrentUserContext)

  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    onDelete(comment)
    setIsDisabled(true)
  }

  return (
      <>
      <Flex mb={'5'}>
        <Avatar />
          <Box mr={10}>
            <Text ml={'5'}>{comment.user}</Text>
            <Text ml={'5'}>{comment.text}</Text>
          </Box>
          {comment.user_id === currentUser.id && 
          <button className='deleteCommentButton' disabled={isDisabled} onClick={handleClick}>
            <AiFillDelete />
          </button>
            
          }
      </Flex>
      </>
  )
}

export default CommentObject