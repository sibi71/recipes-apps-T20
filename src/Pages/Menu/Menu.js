import React, { useState } from 'react'
import './Menu.css'
import Popular from '../../components/Popular/Popular'
import Vegetarian from '../../components/Vegetarian/Vegetarian'
import RecipeItems from '../../components/RecipeItems/RecipeItems'
import { Container } from '@mui/system'




const Menu = () => {
  
  return (
    <Container >
          <div className='menu'>
      <Popular />
       <RecipeItems />
    </div>
    </Container>
   
  )
}

export default Menu