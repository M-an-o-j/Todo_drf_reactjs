import React from 'react'
import Home from './layout/Home'
import Header from './layout/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostTodo from './component/PostTodo'
import Register from './component/Register'
import Login from './component/Login'

const App = () => {
  return (
    <>
    <div className='bg hfull'>
      <Router>
        <div className='bg overflow-x-hidden hfull'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  )
}

export default App