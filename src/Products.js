import React from 'react'
import ProductItem from './ProductItem'



const Products = ({items, onLook}) => {
  return (
    <div className="wrapper">
      <h1>Area Rugs </h1>
    <div className="container">
      
      {items.map((item) => <div><ProductItem key={item.id} item={item} onLook={onLook} /></div>)}
      
    </div>
    </div>
  )
}

export default Products
