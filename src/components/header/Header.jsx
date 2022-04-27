import React from 'react'
import './header.css'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header__container'><h1>Movie Search </h1>
        <div className='search__container'> <i><BsSearch className='icon__header'/></i><input className='input__header' type="text" placeholder='Search' /></div></div>
  )
}

export default Header