import React from 'react'
import "./style.css";

const Restaurent = () => {
  return (
      <>
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
          <img src={image} alt = "image" className='card-media'/>
        </div>
          </div>
    </>
  )
}

export default Restaurent;