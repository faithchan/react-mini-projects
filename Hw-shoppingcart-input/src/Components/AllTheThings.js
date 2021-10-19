import React from 'react';


function AllTheThings(props) {
  const {products, handleClick} = props
  
  const items = products.map((ele,i)=>{
    return(
      <li key={i} onClick={()=>{handleClick(ele)}}>{ele.name} - $ {ele.price}</li>
      
    )
  })


  
  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
           <ul>

             {items}
             
           </ul>
    </div>
      

  );
}

export default AllTheThings;