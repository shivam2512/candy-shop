// CandyForm.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CandyForm = () => {
  const { dispatch } = useCart();
  const [candy, setCandy] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandy({ ...candy, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: { ...candy, quantity: 1 } });
    setCandy({ name: "", description: "", price: "" });
  };

  return (
    <div>
      <h2>Add Candy</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Candy Name"
          value={candy.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={candy.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={candy.price}
          onChange={handleChange}
        />
        <button type="submit">Add Candy</button>
      </form>
    </div>
  );
};

export default CandyForm;
