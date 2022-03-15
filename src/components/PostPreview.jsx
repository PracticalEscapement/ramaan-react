import { Link } from 'react-router-dom'

function PostPreview({ post }) {
  return (
    <>
        <div className='postCardImageContainer'>
          <img src={post.image_url} alt="Restaurant Image" className='postCardImage' />
        </div>
          <Link to={`/post/${post.id}`} className='postCardHeadline'>
            {`"${post.title}"`}
          </Link>
          <a href='https://www.google.com/' className='postCardFooter' >Find Me On Google</a>
    </>
  )
}

export default PostPreview