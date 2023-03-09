import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import burger from "../Img/burger.png"
import pizza from "../Img/pizza.png"
import cake  from "../Img/cake.png"
import dish from "../Img/dish.png"
import delivery from "../Img/delivery.png"
import Popular from '../../components/Popular/Popular'
import Vegetartion from '../../components/Vegetarian/Vegetarian'
const Home = () => {
  return (
    <div>
    <div className='home'>
      <div className='home__left'>
        <div className='home__left_delivery'>
          <h5>Bike Delivery</h5>
         <img src={delivery} alt='delvery'/>
        </div>
        <h1>
          the fastest delivery in <span>Your City</span>
        </h1>
        <p>
          Grocen atssures fresh grocery every morning to your 
          family without getting out in this pandmic
        </p>
        <div className='home__left_btn'>
        <Link to="/Menu" > More than</Link>
        </div>
        
      </div>
      <div className='home__right'>
        <div className='image__option'>
          <img src={burger}alt='burger'/>
          <h4>Burger</h4>
          <p>Mushroom sauce</p>
        </div>
        <div className='image__option'>
          <img src={pizza}alt='burger'/>
          <h4>Pizza</h4>
          <p>Homemade pizza</p>
        </div>
        <div className='image__option'>
          <img src={cake}alt='burger'/>
          <h4>Cake</h4>
          <p>Cream Cake</p>
        </div>
        <div className='image__option'>
          <img src={dish}alt='burger'/>
          <h4>Food Dish</h4>
          <p>Chicken Salad</p>
        </div>
      </div>
    </div>
    <div className='home__main' >
      <Popular />
      <Vegetartion />
    </div>
    </div>
 
  )
}

export default Home