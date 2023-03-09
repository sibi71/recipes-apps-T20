import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Menu from "./Pages/Menu/Menu"
import Contact from "./Pages/Contact/Contact"
import Feedback from "./Pages/Feedback/Feedback"
import Navbar  from './components/Navbar/Navbar';
import Details from './Pages/details/Details';

const App = () => {

  return (

   <BrowserRouter>
   <Navbar /> 
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/menu' element={<Menu />}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path="/details/:id" element={<Details />} />
   </Routes>
   </BrowserRouter>
 

  )
}

export default App