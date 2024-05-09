// src/pages/DonateCart.js
import React, { useState } from 'react';
import './donatecart.css';
import NavbarComponent from '../componenets/Navbar/Navbar';
import axios from "axios";
import Second from "../assets/img5.jpeg";
import DetailsForm from './withoutMoney.js';
import ContactUs from './withoutMoney.js';
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
    
    
    <div className="DonateCart min-h-screen flex flex-col justify-center items-center bg-gray-600"  >
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-8">DONATE CART</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">No one has ever become poor from giving.</p>

      <div className="flex">
      {/* Left section for the image with text */}
      <div className="w-1/4 bg-gray-800  border border-white-500">
        <div className="bg-gray-600 flex flex-col justify-end items-center bg-gray-800 p-4 ">
          <img src="https://images.pexels.com/photos/264529/pexels-photo-264529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" className="w-full h-auto max-h-48 object-cover rounded-lg" />
          <div className="text-white text-center mt-4  ">
            <h1 className="text-4xl font-bold text-left">Donation Cart</h1>
            <p className="mt-4 text-lg  text-left">Imagine a more engaging way to donate! Donation carts allow you to browse and select specific items an organization needs, just like adding products to a shopping cart on a retail site. This empowers you to directly choose how you want to contribute. Fill your cart with school supplies for a children's charity, books for a literacy program, or even food items for an animal shelter. Once your cart is complete, you can securely pay for your chosen donations in one simple transaction, streamlining the giving process and making it more impactful.
</p>
          </div>
        </div>
      </div>
      
      {/* Right section for the cards */}
      <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 group relative cursor-pointer items-center justify-center overflow-hidden " >
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden group relative cursor-pointer hover:scale-125 transition-all duration-500"
              >
                <a href="#">
                  <img className="w-full h-40 object-cover rounded-t-lg " src={item.imageUrl} alt="product image" />
                </a>
                
                <div className="p-4">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                <div className="flex items-center mt-2 mb-3">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">₹{item.price}</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </div>
            </div>
            
      ))}
    </div>
  </div>
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
    <div className="bg-gray-700 p-5 flex flex-col items-center justify-center w-">
  <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center">Show Gratitude</h2>
  <ContactUs />
</div>

    </>
  );
};

export default DonateCart;