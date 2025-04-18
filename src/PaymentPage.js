import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Payment.css';

const PaymentPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>

      <div className="cart-summary">
        <h2>Your Items:</h2>
        {cartItems.map((item, index) => (
          <p key={index}>{item.name} - ₹{item.price}</p>
        ))}
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        <h3>Enter Credit Card Details</h3>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Card Holder Name" required />
        <input type="text" placeholder="Expiry Date (MM/YY)" required />
        <input type="text" placeholder="CVV" required />
        <button type="submit">Pay Now</button>
      </form>

      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Shopping
      </button>
    </div>
  );
};

export default PaymentPage;