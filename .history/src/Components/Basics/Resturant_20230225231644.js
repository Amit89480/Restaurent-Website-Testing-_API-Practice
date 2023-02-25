import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';


const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);
  
  return (
    <>
      <nav className=''></nav>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent;