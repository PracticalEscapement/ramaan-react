import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [user, setUser] = useState({})

  const {id, email, first_name, last_name, is_admin} = user

  const navigate = useNavigate()

  const RAMAAN_URL = process.env.REACT_APP_RAMAAN_URL
  const ramaanUser = axios.create({
    withCredentials: true,
    baseURL: RAMAAN_URL,
  })
  useEffect(() => {
    const getCurrentUser = async() => {
      const currentUser = await ramaanUser.get('/current_user.json')
      setUser(currentUser.data)
    }

    getCurrentUser()
  }, [])

  const logout = async (e) => {
    e.preventDefault()
    const response = await ramaanUser.delete(`/users/sign_out`)
    setUser({})
    console.log(`sign_out: ${response.status}`)
    navigate('/sign-in')
  }


  return (
    <div>
      <h1>Home Page</h1>
      <button className='signInButton' onClick={logout}>Sign Out</button>
      <Link to='/restaurants'>Restaurants</Link>
    </div>
  )
}

export default Home
