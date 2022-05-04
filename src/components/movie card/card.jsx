import React from 'react'
import './card.css'
import {useState} from 'react'
import Details from '../movie_details/Details'


const card = (props)=>{
  const[data,setData]=useState(undefined)
    const {Key}= props
    const [show,setShow]= useState(true)
    const handledetails=(e)=>{
      e.preventDefault() 
      setShow(prev=>!prev)
         console.log(Key)
       
  
      fetch(`http://www.omdbapi.com/?i=${Key}&apikey=d31e74bc`)
 .then(response=> response.json())
 .then(data=>{ setData(data)
  return console.log(data)
 }
)


    }

const handleClick=(e)=>{
    e.preventDefault()
   return setShow(prev=> !prev)
  }
  return (
    show? 
    <div className='card'>
        <div className='card__container'>
        <div className="card__items">
        <div><img onClick={handledetails} src={props.poster==='N/A'? '':props.poster} alt="movie poster" /></div>
        <p>Title: {props.title}</p>
        <p> Year: {props.year}</p>
        </div>
        </div>
        </div>: data? <Details writer={data.Writer} country={data.Country} awards={data.Awards} released={data.Released} year={data.Year} click={handleClick} title={data.Title}/>:'Loading'
  )
}

export default card


