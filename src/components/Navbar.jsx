import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header className='navbar'>
        <ul className='navbarLeft'>
          <li className='navLeftHomeLink' onClick={() => navigate('/')}>
            <p className={
              pathMatchRoute('/') ? 'navLeftHomeLinkActive' : 'navLeftHomeLink'
              }
            >
              Home
            </p>
          </li>
          <li className='navLeftPostsLink' onClick={() => navigate('/posts')}>
          <p className={
              pathMatchRoute('/posts') ? 'navLeftPostsLinkActive' : 'navLeftPostsLink'
              }
            >
              Posts
            </p>
          </li>
          <li className='navLeftAboutLink' onClick={() => navigate('/about')}>
          <p className={
              pathMatchRoute('/about') ? 'navLeftAboutLinkActive' : 'navLeftAboutLink'
              }
            >
              About
            </p>
          </li>
        </ul>
      <Link to='/' className='logo'>RAMAAN</Link>
      <Link to='/sign-in' className='navbarRight'>Sign In</Link>
    </header>
  );
}

export default Navbar
