import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Home.css';

const shoes = [
  {
    name: 'Nike Air Max',
    price: 4500,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d607fe0-6c44-4a92-8b3c-e18c118198b5/air-max-90-shoes-NMmm1B.png',
  },
  {
    name: 'Adidas Ultraboost',
    price: 5000,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad84b99019d4386a67cd03ecc51c0a4_9366/ULTRABOOST_1.0_SHOES_Black_HQ4201_HM1.jpg',
  },
  {
    name: 'Puma RS-X',
    price: 3500,
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391174/01/sv01/fnd/IND/fmt/png/PUMA-RS-X-Efekt-Unisex-Sneakers',
  },
];

const Home = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Shoe Store</h1>
      <h2>Available Shoes</h2>
      <div className="product-grid">
        {shoes.map((shoe, index) => (
          <div className="product-card" key={index}>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>₹{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 && <p>No items in cart.</p>}
        {cartItems.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}{' '}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
        {cartItems.length > 0 && (
          <button className="pay-button" onClick={() => navigate('/payment')}>Proceed to Payment</button>
        )}
      </div>
    </div>
  );
};

export default Home;
