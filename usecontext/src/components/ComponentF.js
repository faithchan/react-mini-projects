// import useContext Hook
import React from "react";
import ComponentG from "./ComponentG"

function ComponentF({userInfo}) {

  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };
  
  console.log('f', userInfo)
  return (
    <div style={style}>
      This is Component F
     <ComponentG />
    </div>
  );
}

export default ComponentF
