import React from 'react'
import './header.css'
import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'

const Header = () => {
    const [search, setSearch]=useState('Avengers')
    const handleChange =(e)=>{setSearch(e.target.value)
    }
  return (
    <div className='header__container'><h1>Movie Search </h1>
        <div className='search__container'> <i><BsSearch className='icon__header'/></i><input onChange={handleChange} className='input__header' type="text" placeholder='Search' /></div></div>
  )
}

export default Header