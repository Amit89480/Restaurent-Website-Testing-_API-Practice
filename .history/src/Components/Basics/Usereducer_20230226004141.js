import React, { useReducer, useState } from "react";
import "./style.css";

const Usereducer = () => {
    const reducer = (currAction) => {
        
    }


    const [myNumber, setmyNumber] = useState(15);

    const[state,dispatch]=useReducer(reducer,initialData);
 
 

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
          class="button2" onClick={()=>myNumber>0?setmyNumber(myNumber-1):setmyNumber(0)}
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

export default Usereducer;