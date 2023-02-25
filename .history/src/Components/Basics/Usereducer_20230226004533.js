import React, { useReducer, useState } from "react";
import "./style.css";

const Usereducer = () => {
    const reducer = (state, action) => {
        if (action.type === "INCR") {
            state = state + 1;
        }
    };


    const [myNumber, setmyNumber] = useState(15);
    const initialData = 10;

    const[state,dispatch]=useReducer(reducer,initialData);
 
 

  return (
    <>
      <div className="center_div">
              <p>{ state}</p>
        <div class="button2"onClick={()=>dispatch({type:"INCR"})} >
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