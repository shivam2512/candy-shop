// App.js
import React from "react";
import "./App.css";
import CandyShop from "./components/CandyShop";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CandyShop />
      </div>
    </CartProvider>
  );
}

export default App;
