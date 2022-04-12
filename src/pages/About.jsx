import CommentModal from '../components/Modal/CommentModal'
import { useState } from 'react'

function About() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='showButton' onClick={() => setShow(true)}>Show Modal</button>
      <CommentModal onClose={() => setShow(false)} show={show} />
    </>
  )
}

export default About
