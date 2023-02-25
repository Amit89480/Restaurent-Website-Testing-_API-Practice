import React, { useState } from 'react'
import "./style.css"

const Useeffect = () => {
    
 
    const [num, setnum] = useState(0);

    return (
      <>
        <div className="center_div">
                <p>{num}</p>
          <div class="button2" onClick={()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          
        </div>
      </>
    );
  };

export default Useeffect;