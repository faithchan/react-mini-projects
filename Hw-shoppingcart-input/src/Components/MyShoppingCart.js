import React from 'react';

function MyShoppingCart(props) {
  const {cartItems, handleClick} = props

  const itemsAdded = cartItems.map((ele,i)=>{
    return(
      <li key={i} onClick={()=>handleClick(i)}  >{ele.name} - $ {ele.price}</li>
    )
  })

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
        <ul>
            
            {itemsAdded}
        </ul>
    </div>
  );
}

export default MyShoppingCart;