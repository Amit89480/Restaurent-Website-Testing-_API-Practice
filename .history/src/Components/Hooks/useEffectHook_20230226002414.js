import React, { useState } from 'react'

const useEffectHook = () => {
    
 
    const [num, setnum] = useState(0);

    return (
      <>
        <div className="center_div">
                <p>Mydata</p>
          <div class="button2" >
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

export default useEffectHook