import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/reg' element={<Register />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
