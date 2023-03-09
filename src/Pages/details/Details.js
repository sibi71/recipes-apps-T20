import React from 'react'
import "./Details.css"
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Details = () => {
  const {id}= useParams()

  return (
    <div className='details'>
      <div className='details__container'>
        <p>
          {id}
        </p>
        <Link to="/menu" className='details__link'>Back</Link>
      </div>
      
    </div>
  )
}

export default Details