import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Admin from './Pages/Admin'
import LoginAdmin from './Pages/LoginAdmin';

 
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/products' element={<Products/>}></Route>          
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/loginadmin' element={<LoginAdmin/>}></Route>  
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App