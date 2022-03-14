import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import About from './pages/About'
import Restaurants from './components/Restaurants'
import { RamaanProvider } from './context/RamaanContext'
import CurrentUserContext from './context/user/currentUserContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  const { dispatch } = useContext(CurrentUserContext)

  useEffect(() => {
        const user = localStorage.getItem("user")
        
        dispatch({type: 'CURRENT_USER', payload: JSON.parse(user)})

  }, [dispatch])
  
  return (
      <RamaanProvider>
        <Router>
          <div>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/restaurants' element={<Restaurants />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/about' element={<About />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
              </Routes>
          </div>
        </Router>
      </RamaanProvider>
  )
}

export default App