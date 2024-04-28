// src/pages/DonateCart.js
import React, { useState } from 'react';
import './donatecart.css';
import NavbarComponent from '../componenets/Navbar/Navbar';
import axios from "axios";
import Second from "../assets/img5.jpeg";
const items = [
  { id: 1, name: 'Blanket', price: 100, limit: 5, imageUrl: 'https://images.pexels.com/photos/2828584/pexels-photo-2828584.jpeg' },
  { id: 2, name: 'Clothes', price: 100, limit: 5, imageUrl: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'BANDAIDS', price: 5, limit: 5, imageUrl: 'https://images.pexels.com/photos/5721555/pexels-photo-5721555.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Food', price: 200, limit: 5, imageUrl: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Shoes', price: 300, limit: 5, imageUrl: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const DonateCart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })

    const options = {
        key,
        amount: totalAmount,
        currency: "INR",
        name: "Donation",
        description: "Tutorial of RazorPay",
        image: Second,
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem && existingItem.quantity >= item.limit) {
      // Display a push notification when the limit is exceeded
      alert(`The donation limit for ${item.name} is ${item.limit}. Please reduce the quantity to continue.`);
      return;
    }

    if (existingItem) {
      // If item already exists in the cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    setTotalAmount(totalAmount + item.price);
  };

  const handlePay = () => {
    // Implement your payment logic here
    alert(`Thanks for your donation! Total amount paid: ₹${totalAmount}`);
    setCart([]);
    setTotalAmount(0);
  };

  return (
    <>
    <NavbarComponent />
    
    <div className="DonateCart min-h-screen flex flex-col justify-center items-center bg-slate-400">
      <h1 className="calligraphy-heading text-white mb-8 animate_animated animate_fadeInUp">
        Donate Cart
      </h1>
      <div className="flex flex-wrap justify-around">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full p-6 mx-2 my-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
            <p className="text-white">Price: ₹{item.price}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="flex justify-between mb-2">
              <p>
                {cartItem.name} x {cartItem.quantity}
              </p>
              <p>₹{cartItem.price * cartItem.quantity}</p>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4">Total: ₹{totalAmount}</p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => checkoutHandler(totalAmount)}
          >
            Pay
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default DonateCart;