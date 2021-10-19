// import useState
import React, { useState, useRef } from 'react';
import './styles.css';
import AllTheThings from './Components/AllTheThings';
import MyShoppingCart from './Components/MyShoppingCart';
import Form from './Components/Form';
import productsArr from './products';

const validatePrice = (price) =>{
  const  re = /^\d+\.\d{2}$/
  
  // const result = re.test(price)
  // console.log("result", result)
  return re.test(String(price).toLowerCase())

}



export default function App() {
  
  //============For all products====================//
  const [products, setProducts] = useState(productsArr)

  //=============For added to cart items=============//
  const [cart, setCart] = useState([])
  //==========useRef==================//
  const productNameRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  //==================================//

  //=============For text field=====================//
  const [search,setSearch]=useState({name:'',price:'', description:''})
  
  //=============To validate price==============//
  const [isPriceValid, setIsPriceValid] = useState(true)



  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  const addToCart = (product) =>{
    setCart(
      [
        ...cart,
        {
          name: product.name,
          price: product.price,
          description: product.description,
        }
      ]
    )
  }

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed
  const removeFromCart = (index) =>{
    const newCart = cart.filter((ele, i) => i !== index)  //use i for filtering as it is unique. if use name, might have multiples and will remove all together
    setCart(newCart)
  }


  const handleSubmit = () =>{
    console.log("product: ", productNameRef.current.value)
    console.log("price: ", priceRef.current.value)
    console.log("description: ", descriptionRef.current.value)

setProducts(
  [
    
    {
      name: productNameRef.current.value,
      price:priceRef.current.value,
      description: descriptionRef.current.value,
    },
    ...products,

  ]
)

    
  }

  const handleProductChange = (event) =>{
    console.log("handleProduct:", event.target.value)
    setSearch({
      ...search,
      name: event.target.value
    })
    
  }

  const handlePriceChange = (event) =>{
    console.log("handlePrice:", event.target.value)
    setSearch({
      ...search,
      price: event.target.value
    })
    
  }

  const handleDescriptionChange = (event) =>{
    console.log("handleDescription:", event.target.value)
    setSearch({
      ...search,
      description: event.target.value
    })
    
  }

  const onPriceBlur = () =>{
    const isPriceValid = validatePrice(search.price)
    setIsPriceValid(isPriceValid)


  }

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form 
        productNameRef={productNameRef}
        priceRef={priceRef}
        descriptionRef={descriptionRef}
        handleSubmit={handleSubmit}
        products={products}
        handleProductChange={handleProductChange}
        handlePriceChange={handlePriceChange}
        handleDescriptionChange={handleDescriptionChange}
        search={search}
        onPriceBlur={onPriceBlur}
        isPriceValid={isPriceValid}
      
      />
      <div className="products">
        <AllTheThings 
            products = {products}
            handleClick = {addToCart}
            productNameRef={productNameRef}
            priceRef={priceRef}
            descriptionRef={descriptionRef}
            handleSubmit={handleSubmit}
          
        />
        <MyShoppingCart 
          cartItems = {cart}
          handleClick = {removeFromCart}
        />
      </div>
    </div>
  );
}