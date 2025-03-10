import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Comics } from './Comics'
import Bienvenida from './Bienvenida'
import Error404 from './Error404'
const NavbarComponent = () => {
  return (
    <BrowserRouter>
        <header>
            <nav>
                <ul>
                    <li>
                    <Link to={"/"} >Home </Link></li>
                    <li>
                    <Link to={"/Comics"} >Comics </Link></li>
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Bienvenida />} />
            <Route path='/comics' element={<Comics />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </BrowserRouter>

  )
}

export default NavbarComponent
