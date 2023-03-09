import React from 'react';
import "./Feedback.css"
const Feedback = () => {
  return (
    <div className='feedback'>
      <div className='feedback__left'>
        <h1>Happy Happy !</h1>
        <form>
        <input type="text" placeholder='Enter your name'/>
        <input type="email" placeholder='Enter your email'/>
        <textarea type="text" placeholder='Enter your feedback' />
       <button >Submit</button>   
       </form>
      </div>
    </div>
  )
}

export default Feedback