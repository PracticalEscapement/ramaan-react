import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import About from "./pages/About"
import { RamaanProvider } from "./context/RamaanContext"

function App() {
  return (
    <RamaanProvider>
      <Router>
        <div>
          <Navbar />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RamaanProvider>
  )
}

export default App