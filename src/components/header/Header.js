import React from 'react'
import "./Header.css";


import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import Search from './Search';




export const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo ">
        <img src="https://www.clipartmax.com/png/middle/85-855949_alphabet-d-latin-letter-logo-png-modern-letter-d.png"></img>
        <h5 className="text-light mt-2">Dented Store</h5>
      </div>
      <div className='header__searchbox'>
      <input type="text" id="search" name="search" placeholder='Search...'/>
      <Button variant="success" className="mx-2">Search</Button>

      </div>
      <div className='logins '>
        <h4 className='p-2 mt-2 '>Login</h4>
        <h4 className='p-2 mt-2'>Register</h4>
        
      </div>
    <div className="navbar"></div>
    </div>
  )
}
