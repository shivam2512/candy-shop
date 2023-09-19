// CandyShop.js
import React, { useState } from "react";
import CandyForm from "./CandyForm";
import CandyList from "./CandyList";
import Cart from "./Cart";

const CandyShop = () => {
  const initialCandies = [
    {
      id: 1,
      name: "Candy 1",
      description: "Description 1",
      price: 1.99,
    },
    {
      id: 2,
      name: "Candy 2",
      description: "Description 2",
      price: 2.49,
    },
    // Add more candies as needed
  ];

  const [candies, setCandies] = useState(initialCandies);

  return (
    <div>
      <h1>Candy Shop</h1>
      <div className="content">
        <CandyForm setCandies={setCandies} candies={candies} />
        <CandyList candies={candies} />
      </div>
      <Cart />
    </div>
  );
};

export default CandyShop;
