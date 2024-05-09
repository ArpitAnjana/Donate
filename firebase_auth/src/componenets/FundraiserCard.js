import React, { useState } from 'react';
import axios from 'axios';

function FundraiserCard({ title, goalAmount, donatedAmount, onDonate, image }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async () => {
    try {
      // Fetch Razorpay key from your backend
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

      // Initiate payment request to your backend
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount: donationAmount // Use the input donation amount
      });

      // Configure Razorpay options
      const options = {
        key,
        amount: donationAmount * 100, // Amount should be in paise
        currency: "INR",
        name: "Donation",
        description: "Donation for Fundraiser",
        order_id: order.id,
        handler: function (response) {
          // Handle successful payment
          console.log("Payment successful", response);
          // Update donated amount in the database and UI
          const updatedDonatedAmount = donatedAmount + parseInt(donationAmount);
          onDonate(updatedDonatedAmount); // Update the donated amount in the parent component
          // Send the updated donated amount to the backend to store in the database
          // axios.post("http://localhost:4000/api/donate", { donatedAmount: updatedDonatedAmount });
        }
      };

      // Initialize Razorpay instance
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const progressBarWidth = (donatedAmount / goalAmount) * 100;

  return (
    <div className="bg-black text-white-smoke shadow-lg rounded-lg p-6 m-4 w-100 flex flex-col items-center justify-center" style={{ width: '400px', maxWidth: '400px' }}>
    {/* Display the image if it exists */}
    {image && (
        <div className="mb-4 flex-shrink-0">
            <img
                src={URL.createObjectURL(image)}
                alt="Fundraiser"
                className="rounded-md max-w-full"
                style={{ maxHeight: "200px" }} // Limiting image size to fit within the card
            />
        </div>
    )}

    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="mb-2 text-white">Goal: {goalAmount} रु</p>
    <p className="mb-2 text-white">Donated: {donatedAmount} रु</p>
    <div className="relative mb-4 w-full">
        <div className="h-4 bg-gray-300 rounded-full">
            <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: `${progressBarWidth}%` }}></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
            {`${progressBarWidth.toFixed(2)}%`}
        </div>
    </div>
    <input
        type="number"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        className="border border-zinc-900 p-2 rounded-md mb-2 w-full bg-zinc-900 text-white"
        placeholder="Enter donation amount"
    />
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleDonate}
        disabled={donatedAmount >= goalAmount || donationAmount <= 0} // Disable donate button if goal is reached or donation amount is not valid
    >
        {donatedAmount >= goalAmount ? "Goal Reached" : "Donate"}
    </button>
</div>


  );
}

export default FundraiserCard;
