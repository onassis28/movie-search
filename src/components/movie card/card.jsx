import React from 'react'
import './card.css'


const card = (props)=>{
    
  return (
    <div className='card'>
        <div className='card__container'>
        <div className="card__items">
        <div><img src={props.poster} alt="movie poster" /></div>
        <p>Movie Title: {props.title}</p>
        <p> Year: {props.year}</p>

        
        
        
        
        </div>
        </div>
        </div>
  )
}

export default card


