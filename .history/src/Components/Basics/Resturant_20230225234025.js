import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';



const uniqueList = [...new Set(Menu.map((currElem) => {
  return currElem.category;
}))
];

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
     
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent;