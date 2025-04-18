import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./CartContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);
