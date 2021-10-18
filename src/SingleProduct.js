import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";





const SingleProduct = ({ item, onAdd }) => {


  const [amount, setAmount] = useState(0)

  
  const [selected, setSelected] = useState(item);


  
const handleAmount = (num) => {
  let newAmount = num + amount;
  if(newAmount <= 0) {
    setAmount(0)
    return;
  } else {
    setAmount(newAmount);
    setSelected({...selected, quantity: newAmount })
   
  }
}



  






  return (
    <div className="specific-item">

      <img src={selected.image}/>
      <div className="written">
        <h1>{selected.name}</h1>
        <h1>${selected.price}</h1>
        <div className="controls">
         <AiOutlinePlus className="quant" size={42} onClick={() => handleAmount(1)}  />
         <h1>{amount}</h1>
         <AiOutlineMinus className="quant" size={42} onClick={() => handleAmount(-1)}  />
        </div>

        <button className="add-cart" onClick={() => onAdd({selected})}>Add to Cart</button>

        <Link to="/products">Back to All Products</Link>
      </div>

    </div>
  )
}

export default SingleProduct
