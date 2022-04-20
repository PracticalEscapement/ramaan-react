import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentObject from './CommentObject'
import CommentModal from '../Modal/CommentModal'
import { deleteComment } from '../../context/ramaan/RamaanActions'
import { 
  VStack, 
  Box,
  Heading,
  Divider
} from '@chakra-ui/react'

function CommentsList({ comments, onRemove }) {
  const params = useParams()
  const [showModal, setShowModal] = useState(false)
  const [rComment, setRComment] = useState('')

  const initDeleteComment = (comment) => {
   setShowModal(true)
   setRComment(comment)
  }

  const delComment = () => {
    const callDeleteComment = async () => {
      const response = await deleteComment(params.id, rComment.id)
      // TODO Use response to render success message
      if (response.status <= 204) {
        handleConfirm()
        console.log('deleted')
      }
    }
    callDeleteComment()
  }

  const handleConfirm = () => {
    onRemove(rComment)
    setShowModal(false)
    setRComment('')
  }


  if (comments.length === 0) {
    return (
      <>
        <h2>Comments</h2>
        <h3>No Comments Yet</h3>
      </>
    )
  }

  return (
    <VStack align={'right'}>
    <Divider mt={'15px'} />
    <Heading fontSize={'lg'} align={'center'} mb={'20px'}>Comments</Heading>

    <Box w={'800px'}>
      {comments.map((comment) => (
        <CommentObject key={comment.id} comment={comment} onDelete={initDeleteComment} />
      ))}
      <CommentModal
        onClose={() => setShowModal(false)}
        show={showModal}
        onConfirm={delComment}
      />
    </Box>
    </VStack>
  )
}

export default CommentsList