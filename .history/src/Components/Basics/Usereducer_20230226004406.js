import React, { useReducer, useState } from "react";
import "./style.css";

const Usereducer = () => {
    const reducer = (state, action) => {
        if (action.type === "INCR") {
            
        }
    };


    const [myNumber, setmyNumber] = useState(15);
    const initialData = 10;

    const[state,dispatch]=useReducer(reducer,initialData);
 
 

  return (
    <>
      <div className="center_div">
              <p>{ state}</p>
        <div class="button2"onClick={} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" 
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