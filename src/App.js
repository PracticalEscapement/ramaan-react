import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App