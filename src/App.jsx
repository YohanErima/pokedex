import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './Pages/Pokedex'
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App