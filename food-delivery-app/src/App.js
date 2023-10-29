import React from 'react'
import './index.css'
import {Routes,Route} from 'react-router'
import { BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home'
// import ButtonAppBar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App