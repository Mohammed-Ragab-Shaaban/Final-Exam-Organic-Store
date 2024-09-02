import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage />}></Route>
            <Route path='/everything' element={<h1>Every Thing</h1>}></Route>
            <Route path='/groceries' element={<h1>Groceries</h1>}></Route>
            <Route path='/juice' element={<h1>Juice</h1>}></Route>
            <Route path='/about' element={<h1>About</h1>}></Route>
            <Route path='/contact' element={<h1>Contact</h1>}></Route>
            <Route path='/login' element={<h1>Login</h1>}></Route>
            <Route path='/register' element={<h1>Register</h1>}></Route>
            <Route path='*' element={<h1>404 Page</h1>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
