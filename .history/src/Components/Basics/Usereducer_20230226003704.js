import React, { useState,useEffect } from 'react'
import "./style.css"

const Usered = () => {
    
 
  const [num, setnum] = useState(0);
  useEffect(() => {
   document.title=`Chats(${num})`
  });

// },[]);
  

    return (
      <>
        <div className="center_div">
                <p>{num}</p>
          <div class="button2" onClick={()=>setnum(num+1)}>
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