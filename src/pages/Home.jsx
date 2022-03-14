import { useEffect, useContext } from 'react'
import CurrentUserContext from '../context/user/currentUserContext'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const { currentUser, isSignedIn } = useContext(CurrentUserContext)
  const {id, email, first_name, last_name, is_admin} = currentUser

  return (
    <div>
      {isSignedIn && 
        (<h1>
          Welcome Back {first_name}!
        </h1>)
      }
      {!isSignedIn && 
        (<h1>
          Welcome!
        </h1>)
      }
      <Link to='/restaurants'>Restaurants</Link>
    </div>
  )
}

export default Home
