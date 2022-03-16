import { useNavigate, useLocation } from 'react-router-dom'
import { useContext }  from 'react'
import CurrentUserContext from '../context/user/currentUserContext'
import { signOut } from '../context/user/currentUserActions'
import { Link } from 'react-router-dom'


function Navbar() {

  const { isSignedIn, currentUser, dispatch } = useContext(CurrentUserContext)

  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const handleClick = () => {
    const signOutCurrentuser = async () => {
      const response = await signOut()
      if (response.status === 204) {
        dispatch({type: 'SIGNED_OUT'})
        localStorage.setItem("user", null)
        navigate('/about')
      } 
    }
    signOutCurrentuser()
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
      <Link to='/' className='logo'>RAMEN FINDER</Link>
      
      {!isSignedIn &&
       <Link to='/sign-in' className='navbarRight'>Sign In</Link>
      }
      {isSignedIn &&
        <button className='navbarRight' onClick={handleClick}>Sign Out</button>
      }
   
    </header>
  );
}

export default Navbar
