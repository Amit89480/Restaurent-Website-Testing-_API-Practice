import React from 'react'

const Navbar = ({filterItem}) => {
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




    </>
  )
}

export default Navbar