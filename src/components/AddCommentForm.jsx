import { useState } from 'react'
import { addComment } from '../context/RamaanActions'

function AddCommentForm({ post_id, addNewComment }) {

  const [commentData, setCommentData] = useState({
    text: '',
    likes: 0,
  })

  const onChange = (e) => {
    setCommentData({
      [e.target.id]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const callAddComment = async () => {
      const response = await addComment(e, post_id, commentData)
      addNewComment(response.data)
    }
    callAddComment()
  }

  return (
    <div className='commentFormContainer'>
      <form onSubmit={onSubmit}>
        <textarea 
          className='commentText'
          placeholder='Let it all out...'
          type='text'
          id='text'
          value={commentData.text}
          onChange={onChange}
        />
        <button className='commentSubmitButton'>Submit</button>
      </form>
    </div>
  )
}

export default AddCommentForm