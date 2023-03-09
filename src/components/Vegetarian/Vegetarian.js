import React,{useEffect, useState} from 'react'
import "./Vegetarian.css"
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Container } from '@mui/system';


const Vegetartion = () => {
  const [vege, setVege] = useState([])


async function geturl(){
  const check =localStorage.getItem("Vegetartion")
  if(check){
    setVege(JSON.parse(check))
  }else{
  try {
    const url = "https://api.spoonacular.com/recipes/random?number=100&tags=vegetarian&apiKey=10d18c1f9a2e426f822cc191e573fee5"
    const res = await axios.get(url)
   localStorage.setItem("Vegetartion",JSON.stringify(res.data.recipes));
    setVege(res.data.recipes);
   
  } catch (error) {
    alert(error.message)
    console.log(error.message);
  }
}}
useEffect(()=>{
  geturl();
},[])
  return (
   
    <div className='vege'>
      <h1>Vegetarian</h1>
      <br></br>
     <Splide options={{
      perPage:4,
      pagination:false,
      arrows:false,
      drag:'free',
      gap:'1rem',
      rewind: true ,
     }}> {
        vege.map((vegeRescipe)=>{
          return  (
        <SplideSlide key={vegeRescipe.id}>
            <div className='vege__main' >
              <img src={vegeRescipe.image} alt={vegeRescipe.title}
              />
              <p>{vegeRescipe.title}</p>
            </div>
       
        </SplideSlide>
          )
        })
      }</Splide>
    </div>
  )
}

export default Vegetartion