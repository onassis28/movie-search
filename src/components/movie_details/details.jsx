import React from 'react'
import './details.css'

const Details = (props) => {

  return (
    <div className='card__details'>
        <div onClick={props.click} className='carddetails__container'>
        <div className="carddetails__items">
        <p>Title: {props.title}</p>
        <p> Year: {props.year}</p>
        <p> Released: {props.released}</p>
        <p> Awards: {props.awards}</p>
        <p> Country: {props.country}</p>
        <p> Writer: {props.writer}</p>

        
      
        
        
        </div>
        </div>
        </div>
  )
}

export default Details