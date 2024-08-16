import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Products from './components/Products'
const App = () => {
  return (
    <div>
      <nav></nav>
      <Products />
    </div>
  )
}

export default App
