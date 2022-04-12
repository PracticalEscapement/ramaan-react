import './Modal.css'

function CommentModal({ show, onClose }) {
 
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>Please Confirm!</h4>
        </div>
        <div className='modal-body'>
          Are you sure you want to delete this comment?
        </div>
        <div className='model-footer'>
          <button className='button' onClick={onClose}>Cancel</button>
          <button className='button'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default CommentModal