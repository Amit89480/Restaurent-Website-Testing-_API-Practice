import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const intialData = 10;

    const[myNumber,setmyNumber]=useState(intialData)
 
 

  return (
    <>
      <div className="center_div">
              <p>{ myNumber}</p>
        <div class="button2" onClick={()=>setmyNumber(myNumber+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={()=>myNumber>setmyNumber(myNumber-1)}
         >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;