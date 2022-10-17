import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
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
        <Route path='/user' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
