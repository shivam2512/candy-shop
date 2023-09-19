// Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, dispatch } = useCart();

  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const cartItemAddHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const cartItemsList = cartItems.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => cartItemRemoveHandler(item)}>Remove</button>
      <button onClick={() => cartItemAddHandler(item)}>Add 1 more</button>
    </div>
  ));

  return (
    <div>
      <h2>Cart</h2>
      {cartItemsList}
      <div>
        <p>Total Amount</p>
        <p>₹{totalAmount}</p>
      </div>
      <div>
        <button>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </div>
  );
};

export default Cart;
