import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';


const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);
  
  return (
      <>
      <MenuCard menuData={} />
    </>
  )
}

export default Restaurent;