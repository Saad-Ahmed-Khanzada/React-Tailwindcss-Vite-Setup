
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about';
import './App.css'
import Home from './home';

function App() {
  


  return (
    <Router> 
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-purple-500 to-blue-400 flex justify-between items-center p-4">
          <Link to="/" className="text-white font-bold text-xl">Home</Link>
          <Link to="/about" className="text-white font-bold text-xl">About</Link>
        </nav>


       {/* Routes */}
       <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
  </Router>
  )
}

export default App
