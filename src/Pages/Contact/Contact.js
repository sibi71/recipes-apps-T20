import React from 'react'
import "./Contact.css"
import logo from "../Img/Recipe.png"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__left'>
        <img src={logo} alt="img" />

      </div>
      <div className='contact__right'>
      <h1>Awesome food and superb home delivery</h1>
       <p>
        Looks can be deceptive and Deepanshu Restaurants is a fine example of this proverb. Located in the Shaktikhand 1st area of Indirapuram, it can easily be passed on as any other small time roadside restaurant. It provides some really amazing food in quite affordable prices and their home delivery is really prompt. They are really popular all around Indirapuram.
       </p>
       <p>
       Pros:
       <br></br>
        1. Location - Easily located in the Shaktikhand 2 area on the main road<br></br>
        2. Ambiance - Simple seating area nothing fancy (its their home delivery that is more famous)<br></br>
        3. Food - Awesome food whether it is veg or non-veg items<br></br>
        4. Price - Very budget friendly priced, sometimes lower than some more popular restaurants without compromising on quality<br></br>
        5. Delivery - Prompt home delivery which will easily fail the Pizza guys at any time<br></br>
       </p>
       <div className='contact__link'>
       <Link to="/feedback">share your feedback</Link>
       </div>
      
       <div className='contact__copy'>
        <p>
         Copyright @  <a href='https://github.com/sibi71' target="_blank">ARUNSIBI</a>
        </p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact