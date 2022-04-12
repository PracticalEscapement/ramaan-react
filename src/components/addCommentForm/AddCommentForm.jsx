import style from './addCommentForm.module.css'
import { useState } from 'react'
import { addComment } from '../../context/ramaan/RamaanActions'

function AddCommentForm({ post_id, addNewComment, unclickButton }) {

  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [commentData, setCommentData] = useState({
    text: '',
    likes: 0,
  })

  // There is a small bug that causes the button to still be active
  // if the text is deleted, but if 1 character is added, the button is disabled.
  const handleChange = (e) => {
    if (commentData.text === '') {
      setSubmitDisabled(true)
    } else {
      setSubmitDisabled(false)
    }
    setCommentData({
      [e.target.id]: e.target.value
    })
  }

  // TODO Add a banner telling the user a their comment was created
  const handleSubmit = (e) => {
    e.preventDefault()
    const callAddComment = async () => {
      const response = await addComment(e, post_id, commentData)
      addNewComment(response.data)
    }
    callAddComment()
  }

  return (
    <div className={style.commentFormContainer}>
      <form onSubmit={handleSubmit}>
        <textarea 
          className={style.commentText}
          placeholder='Let it all out...'
          type='text'
          id='text'
          value={commentData.text}
          onChange={handleChange}
        />
        <button 
          className={style.commentSubmitButton}
          type='submit'
          disabled={submitDisabled}>
            Submit
        </button>
      </form>
      <button 
      className={style.commentCancelButton}
      onClick={unclickButton}>
        X
      </button>
    </div>
  )
}

export default AddCommentForm