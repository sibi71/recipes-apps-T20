import React,{useEffect, useState} from 'react'
import "./Popular.css"
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const Popular = () => {
  const [popular, setPopular] = useState([])
  


async function geturl(){
  
  const check =localStorage.getItem("Popular")
  if(check){
    setPopular(JSON.parse(check))
  }else{
  try {
    const url = "https://api.spoonacular.com/recipes/random?number=100&tags&apiKey=10d18c1f9a2e426f822cc191e573fee5"
    const res = await axios.get(url)
    localStorage.setItem("Popular",JSON.stringify(res.data.recipes));
    setPopular(res.data.recipes);
    console.log(res.data.recipes);
    
  } catch (error) {
    alert(error.message)
    console.log(error.message);
  }
}}
useEffect(()=>{
  geturl();
},[])


  return (
    
    <div className='popular'>
      <h1>Popular</h1> 
      <br></br>
     <Splide options={{
      perPage:4,
      pagination:false,
      arrows:false,
      drag:'free',
      gap:'1rem',
      rewind: true ,
     }}> {
        popular.map((recipe)=>{
          return  (
        <SplideSlide  key={recipe.id}>
            <div className='popular__main'>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
       
        </SplideSlide>
          )
        })
      }</Splide>
    </div>
  )
}

export default Popular