import React from 'react'

const useEffectHook = () => {
    
 
 

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
          
        </div>
      </>
    );
  };

export default useEffectHook