import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";


const Restaurent = () => {
  const  [menuData, setmenuData] = useState(Menu);
  console.log(menuData)
  
  return (
      <>
      
    </>
  )
}

export default Restaurent;