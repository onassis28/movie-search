import React from 'react'
import './card.css'
import { useState } from 'react'

const card = () => {
    
  return (
    <div className='card'>
        <div className='card__container'>
        <div className="card__items">
        <div><img src="#" alt="movie poster" /></div>
        <h2>Movie Tile</h2>
        <p>Movie year</p>

        
        
        
        
        </div>
        </div>
        </div>
  )
}

export default card

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d31e74bc')
.then(response=> response.json())
.then(data=>console.log(data.Actors))