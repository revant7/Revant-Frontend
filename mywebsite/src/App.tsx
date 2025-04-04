import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import GenerateStoryAndImage from './components/Story'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/generate" element={<GenerateStoryAndImage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
