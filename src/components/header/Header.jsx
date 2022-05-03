import React from 'react'
import './header.css'
import {BsSearch} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import Card from '../movie card/card'

    
 

const Header = (props) => {
    const [search, setSearch]=useState('Home Alone')
    const handleChange =(e)=>{setSearch(e.target.value)}
    const [data, setData]= useState([])
    useEffect( ()=>{
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=d31e74bc`)
.then(response=> response.json())
.then(data=> {setData(data.Search)


})





    },[search])

    const dataRender =data.map(item=>{
        return <Card
        key={item.imbdbID}
        year ={item.Year}
        poster={item.Poster}
        title={item.Title}
        />
    })
    

 

   
    
  return (
      <>
    <div className='header__container'><h1>Movie Search </h1>
        <div className='search__container'> <i><BsSearch className='icon__header'/></i><input onChange={handleChange} className='input__header' type="text" placeholder='Search' /></div></div>
       <section className='dataRender'>{dataRender}</section> 
        
        </>
  )
}

export default Header

