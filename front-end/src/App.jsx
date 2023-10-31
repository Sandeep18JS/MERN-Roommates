import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import Room from './pages/Room'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room' element={<Room />} />
    </Routes>
  )
}