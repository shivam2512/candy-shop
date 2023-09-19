// CandyList.js
import React from "react";
import { useCart } from "../context/CartContext";

const CandyList = ({ candies }) => {
  const { cartItems, dispatch } = useCart();

  const handleBuy = (candy, quantity) => {
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === candy.id);

    if (existingCartItemIndex !== -1) {
      // If the item is already in the cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += quantity;

      dispatch({
        type: "UPDATE_CART_ITEMS",
        payload: updatedCartItems,
      });
    } else {
      // If the item is not in the cart, add it with the specified quantity
      dispatch({ type: "ADD_TO_CART", payload: { ...candy, quantity } });
    }
  };

  return (
    <div>
      <h2>Available Candy Stock</h2>
      {candies.map((candy) => (
        <div key={candy.id}>
          <p>Name: {candy.name}</p>
          <p>Price: {candy.price}</p>
          <button onClick={() => handleBuy(candy, 1)}>Buy-1</button>
          <button onClick={() => handleBuy(candy, 2)}>Buy-2</button>
          <button onClick={() => handleBuy(candy, 3)}>Buy-3</button>
        </div>
      ))}
    </div>
  );
};

export default CandyList;
