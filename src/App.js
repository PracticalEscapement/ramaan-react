import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Posts from './pages/Posts'
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App