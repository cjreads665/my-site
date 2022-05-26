import { useState } from 'react'
import Navbar from './Header/Navbar'
import Home from './Home/Home'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from './About/About';
function App() {

  return (
    <div className="App bg-black min-h-screen text-white font-mono p-4">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
