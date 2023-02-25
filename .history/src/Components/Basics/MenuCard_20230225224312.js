import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData)
  return (
      <>
          
          {
              menuData.map((curr) => {
                return 
                  



            })
      }





        <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <span className='card-number card-circle subtle'>1</span>
            <span className='card-author subtle'>breakFast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-description subtle'>
              I love maggi....Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium numquam quibusdam quas! Saepe aut inventore incidunt adipisci quod totam?
            </span>
            <div className='card-read'>Read</div>

          </div>
          {/* <img src={images} alt="image" className='card-media' /> */}
          

          <span className='card-tag'>Order Now</span>
        </div>
          </div>  




    </>
  )
}

export default MenuCard