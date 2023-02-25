import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';



const uniqueList = Menu.map((currElem) => {
  return currElem.category;
})

console.log(uniqueList)

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
          <button className='btn-group__item' onClick={()=>filterItem("evening")}> Evening
          </button>
          <button className='btn-group__item' onClick={()=>filterItem("dinner")}>
            dinner
          </button>
          <button className='btn-group__item' onClick={()=>setmenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent;