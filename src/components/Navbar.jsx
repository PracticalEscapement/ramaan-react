import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  

  return (
    <div>
      <ul className='navbar-elements'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
