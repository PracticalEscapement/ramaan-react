import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <header className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='logo'>RAMAAN</li>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <h3 className={
              pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'
            }
            >
              Home
            </h3>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/posts')}>
            <h3 className={
              pathMatchRoute('/posts') ? 'navbarListItemNameActive' : 'navbarListItemName'
            }
            >
              Posts
            </h3>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/about')}>
            <h3 className={
              pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'
            }
            >
              About
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
