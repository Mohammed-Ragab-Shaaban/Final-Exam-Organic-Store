import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Pages/Components/Header/Header'
import { HeaderStateProviderContext } from './Pages/Components/Context'
import EveryThing from './Pages/EveryThing/EveryThing'
import SingleProduct from './Pages/Components/SingleProduct'

export default function App() {
  return (
    <div>
      <BrowserRouter>
                <HeaderStateProviderContext>
                  <Header />
                </HeaderStateProviderContext> 
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage />}></Route>

            <Route path='/everything' >
              <Route index element={<EveryThing />}></Route>

              <Route path=':id' element={<SingleProduct />}></Route>
              
            </Route>

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
