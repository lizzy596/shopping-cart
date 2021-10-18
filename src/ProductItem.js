import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'



const ProductItem = ({item,onLook }) => {
  const { id, image, name, price } = item
  return (

      
      <div className="card">
      
      <img src={image} alt="rug" style={{width: '100%'}} />
      <div className="details">
        <h3>{name}</h3>
        <h2>${price}</h2>
        <Link to={`/products/${id}`} onClick={() => onLook(id)} className="item-detail">View Details</Link>
      </div>
      </div>
      
    
  )
}

export default ProductItem
