import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';


const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);
  
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' o>
            Breakfast
          </button>
          <button className='btn-group__item'>
            lunch
          </button>
          <button className='btn-group__item'>
            dinner
          </button>
          <button className='btn-group__item'>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent;