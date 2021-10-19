import React, {useState} from 'react';


function Form(props) {
  const {productNameRef, priceRef, descriptionRef,handleSubmit, handleProductChange, handlePriceChange, handleDescriptionChange, search, onPriceBlur, isPriceValid} = props
  



  return (
    <div className="form">
      <input name="name" value={search.name} type="text" placeholder="product name" ref={productNameRef} onChange={handleProductChange}  />
      <input type="text" value={search.price} placeholder="price" ref={priceRef} onChange={handlePriceChange} onBlur={onPriceBlur}/>
      {isPriceValid ? "" : <p>Invalid Price!!!</p>  }
      <input type="text" value={search.description} placeholder="description" ref={descriptionRef} onChange={handleDescriptionChange}/>
      <input type="submit"  onClick={handleSubmit} disabled={!isPriceValid}  />
      

    </div>
  );
}

export default Form;