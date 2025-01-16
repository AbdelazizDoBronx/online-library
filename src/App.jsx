import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sign from './pages/Sign'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Sign/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App