
import Products from "./Products";
import Rugs from './data'
import Nav from "./Nav";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Home from "./Home";
import Footer from './Footer'
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import {Helmet} from "react-helmet";








const App = () => {


const [rugs, setRugs] = useState(Rugs);
const [cart, setCart] = useState([]);
const [amount, setAmount] = useState(0);
const [showCart, setShowCart] = useState(false);
const [specificItem, setSpecificItem] = useState({})
const [total, setTotal] = useState(0)




const handleCart = ({ selected }) => {
  if (cart.some((item) => item.id === selected.id)) {
    setCart(
      cart.map((item) =>
        item.id === selected.id
          ? { ...item, quantity: selected.quantity }
          : item
      )
    );
    return;
  }

  setCart([...cart, selected]);
  
};

useEffect(() => {


const ary = cart.map((item) => item.quantity)
let sum = ary.reduce(function(a, b){
  return a + b;
}, 0);
setAmount(sum)
}, [cart])


useEffect(() => {
  const ary = cart.map((item) => item.quantity * item.price)
  let sum = ary.reduce(function(a,b) {
    return a + b
  }, 0);
  setTotal(sum)
}, [cart])





const handleIncrease = ({id, name, image, quantity}) => {

const selected = {id, name, image, quantity};
let newQuantity = quantity + 1;

if (cart.some((item) => item.id === selected.id)) {
  setCart(
    cart.map((item) =>
      item.id === selected.id
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
  return;
}

setCart([...cart, selected]);

}

const handleDecrease = ({id, name, image, quantity}) => {
  const selected = {id, name, image, quantity};
  
  if (selected.quantity === 1) return;


  setCart(
    cart.map((item) =>
      item.id === selected.id ? { ...item, quantity: item.quantity - 1 } : item
    )
  );




}


const handleDelete = (id) => {
  const updated = cart.filter((item) => item.id !== id)
  setCart(updated)
}




const handleLook = (id) => {
  const selected = rugs.find((item) => item.id === id);
  setSpecificItem(selected);
  
}


  return (
    <Router>
      <Helmet>
        <title>My Shopping Cart</title>
        <meta name="description" content="shopping cart" />
    </Helmet>
     <Nav amount={amount} />
      <Switch>
      <Route exact path="/shopping-cart">
          <Home />
        </Route>

        <Route exact path="/products">
          <Products items={rugs} onLook={handleLook} />
        </Route>

        <Route path="/products/:id">
          <SingleProduct item={specificItem} onAdd={handleCart}/>
        </Route>

        <Route path="/cart">
          <Cart cart={cart} onAdd={handleIncrease} onSub={handleDecrease} total={total} onDelete={handleDelete}/>
        </Route>
       </Switch>
       <Footer />
    </Router>
  );
};

export default App;


