import React from 'react'
import './card.css'


const card = (props)=>{
    const {Key}= props
    const handledetails=()=>{
        return console.log(Key)
    }
  return (
    <div className='card'>
        <div className='card__container'>
        <div className="card__items">
        <div><img onClick={handledetails} src={props.poster} alt="movie poster" /></div>
        <p>Movie Title: {props.title}</p>
        <p> Year: {props.year}</p>

        
      
        
        
        </div>
        </div>
        </div>
  )
}

export default card


