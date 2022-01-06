import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box'>
      <div className='container mx-auto'>
        <div>
          RAMAAN
        </div>
        <div className='flex-none px-2 mx-2'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/posts' className='btn btn-ghost btn-sm rounded-btn'>
            Posts
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
