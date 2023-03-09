import React,{useEffect, useState} from 'react'
import "./RecipeItems.css"
import axios from "axios";
import {  Link} from "react-router-dom"


const RecipeItems = () => {
  
  const [more, setMore] = useState([])


async function geturl(){
  const check =localStorage.getItem("MoreItems")
  if(check){
    setMore(JSON.parse(check))
  }else{
  try {
    const url = "https://api.spoonacular.com/recipes/random?number=50&tags&apiKey=10d18c1f9a2e426f822cc191e573fee5"
    const res = await axios.get(url)
    localStorage.setItem("MoreItems",JSON.stringify(res.data.recipes));
    setMore(res.data.recipes);
  } catch (error) {
    alert(error.message)
    console.log(error.message);
  }
}}
useEffect(()=>{
  geturl();
},[])

  return (
    <div className='moreitem'>
      {
        more.map((recipe,index)=>{
          return  (
        <div key={recipe.id} className="moreitem__container"> 
            <div className='moreitem__main'>
              <div className='moreitem__title'>
              <img src={recipe.image} alt={recipe.title} />
              <div className='moreitem__detail'>
              <h2 >{recipe.title}</h2>
              <p>{recipe.dishTypes[0]}</p>
              <h5><span>$</span> {recipe.pricePerServing}</h5>
              <Link to={`/details/${recipe.instructions}`} className='moreitem__link'>Details</Link>
              </div>
              </div>
              
            </div>
           
        </div>
          )
        })
      }
    </div>
  )
}

export default RecipeItems