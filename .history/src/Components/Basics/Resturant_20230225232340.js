import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';


const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category
    });
    setmenuData(updatedList);
  };
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>
            Breakfast
          </button>
          <button className='btn-group__item' onClick={()=>filterItem("lunch")}>
            lunch
          </button>
          <button className='btn-group__item' onClick={()=>filterItem("evening")}>
          </button>
          <button className='btn-group__item' onClick={()=>filterItem("dinner")}>
            dinner
          </button>
          <button className='btn-group__item' onClick={()=>filterItem("all")}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent;