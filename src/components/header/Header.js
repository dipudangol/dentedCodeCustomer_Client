import React, { useEffect } from 'react'
import "./Header.css";


import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import Search from './Search';
import { NavBarHeader } from '../navBarHeader/NavBarHeader';
import { getProductsAction } from '../../pages/dashboard/productAction';
import { getCategoryAction } from '../../pages/dashboard/categoryAction';





export const Header = () => {

  const { productList } = useSelector(state => state.products);
  const { categories } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !productList.length && dispatch(getProductsAction())
    !categories.length && dispatch(getCategoryAction())


  }, [dispatch, categories, productList]);


  return (
    <>
      {/* <div className='header'>
        <div className="header__logo ">
          <img src="https://www.clipartmax.com/png/middle/85-855949_alphabet-d-latin-letter-logo-png-modern-letter-d.png"></img>
          <h5 className="text-light mt-2">Dented Store</h5>
        </div>
        <div className='header__searchbox'>
          <input type="text" id="search" name="search" placeholder='Search...' />
          <Button variant="success" className="mx-2">Search</Button>

        </div>
        <div className='logins '>
          <h4 className='p-2 mt-2 '>Login</h4>
          <h4 className='p-2 mt-2'>Register</h4>

        </div>
        <div className="navbar"></div>
      </div> */}

      <header class="header">
        <nav class="header-nav">
          <div class="header-container">
            <img class="amazon-logo" src="https://www.clipartmax.com/png/middle/85-855949_alphabet-d-latin-letter-logo-png-modern-letter-d.png" alt="Dented Logo" />
            <div class="header-search">
              <input class="search-input" type="text" />
              <button class="search-button" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <div class="header-cart">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <p>Cart</p>
            </div>
            <div class="header-logins">
              <h5 className='p-2 mt-2 '><Link to={`/login`} style={{ color: '#FFF', textDecoration: 'none' }}>  Login  </Link>|</h5>
              <h5 className='p-2 mt-2'><Link to={`/register`} style={{ color: '#FFF', textDecoration: 'none' }}> Register</Link></h5>
            </div>


          </div>
        </nav>

      </header>
      <NavBarHeader categories={categories} />
    </>
  )
}
