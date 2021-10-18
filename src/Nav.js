import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';


const Nav = ({ amount }) => {
  return (
    <div className="nav">

      <Link className="link" to="/"><h1>St. Vanden's Rugs</h1></Link>
      <div className="icon">
        <Link className="link" to="/cart"><FaShoppingBag size={42}/></Link>
        <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
      </div>
      
      
    </div>
  )
}

export default Nav
