import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import Footer from '../componenets/footer/Footer';
import FundraiserCard from '../componenets/FundraiserCard';
import NavbarComponent from '../componenets/Navbar/Navbar';
function Fundraiser() {
  
  const [formData, setFormData] = useState({
    title: '',
    goalAmount: '',
    image: null, // Initialize image to null
  });

  const [fundraiserCards, setFundraiserCards] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Update image field in formData
    });
  };

  const handleDonate = (index, donatedAmount) => {
    // Update the donated amount for the specific card
    const updatedCards = [...fundraiserCards];
    updatedCards[index].donatedAmount = donatedAmount;
    setFundraiserCards(updatedCards);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new fundraiser card using the form data
    const newCard = {
      title: formData.title,
      goalAmount: formData.goalAmount,
      donatedAmount: 0, // Initialize donated amount to 0
      image: formData.image, 
    };
    // Update the fundraiser cards state with the new card
    setFundraiserCards([...fundraiserCards, newCard]);
    // Reset the form after submission
    setFormData({
      title: '',
      goalAmount: '',
      image: null, // Reset image to null
    });
  };

  return (
    
    <div>
    <NavbarComponent />
     <div className="flex flex-col items-center justify-start p-4 h-full">
     <div className="App">
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString("Make a Difference")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Join Us in Changing Lives")
                .start();
        }}
        options={{
            strings: ["Make a Difference", "Join Us in Changing Lives"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter-wrapper",
            cursorClassName: "typewriter-cursor",
            
        }}
    />
</div>

         <div className="mb-8 h-full">
             <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 max-w-md w-full p-11 relative h-full">
                 <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">Create Fundraiser</h2>
                 <input
                     type="text"
                     name="title"
                     placeholder="Title"
                     value={formData.title}
                     onChange={handleInputChange}
                     className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                 />
                 <input
                     type="number"
                     name="goalAmount"
                     placeholder="Goal Amount"
                     value={formData.goalAmount}
                     onChange={handleInputChange}
                     className="block w-full px-4 py-3 mt-4 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                 />
                 {/* Add input field for image */}
                 <input
                     type="file"
                     name="image"
                     onChange={handleImageChange}
                     className="block w-full px-4 py-3 mt-4 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                 />
                 <button type="submit" className="w-full px-4 py-3 mt-6 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800">
                     Create Fundraiser
                 </button>
                 <div className="border-gradient-animation"></div>
             </form>
         </div>
         <div>
         <div className="card-container  grid grid-cols-1 md:grid-cols-3 gap-4  p-4 rounded-lg">
             {/* Render existing fundraiser cards */}
             {fundraiserCards.map((card, index) => (
                 <FundraiserCard
                     key={index}
                     title={card.title}
                     goalAmount={card.goalAmount}
                     donatedAmount={card.donatedAmount}
                     onDonate={(donatedAmount) => handleDonate(index, donatedAmount)}
                     image={card.image} // Pass the image prop to FundraiserCard
                 />
             ))}
             
         </div>
         
         </div>
     </div>
     <Footer />
    </div>

  );
}

export default Fundraiser;

