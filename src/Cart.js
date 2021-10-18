import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import { FaTrashAlt } from 'react-icons/fa'


const Cart = ({ cart, onSub, onAdd,total, onDelete }) => {









  return (
    <div className="cart-container">
      {cart.length === 0 ? <h1>Your Cart is Empty</h1> : <h1>Your Bag </h1>}

      

      {cart.length > 0 && <div className="cart-wrapper">
        {cart.map((item) => {
          const {id, name, price, quantity, image} = item
          return (
            <div class="cart-item" key={id} >
              <img src={image} style={{width: '10%'}} />
              <h2>Name:  {name}</h2>
              <h2>Price:  {price}</h2>
               <div className="qty">
                 <h2>Qty:</h2>
                 <div className="arrow">
                 <AiOutlineArrowUp className="clicker" size={42} onClick={() => onAdd({id, image, name, price, quantity}) } />
                 <h2>{quantity}</h2>
                 <AiOutlineArrowDown className="clicker" size={42} onClick={() => onSub({id, image, name, price, quantity})} />
                 </div>
               </div>
              <FaTrashAlt size={28} onClick={() => onDelete(id)} />
              </div>
          )
        })}
      </div>}

      {cart.length > 0 && <div className="total-container">
        <h1>Total: </h1>
        <h1>$ {total.toFixed(2)}</h1>
      </div>}

    
     
     
    </div>
  )
}

export default Cart

