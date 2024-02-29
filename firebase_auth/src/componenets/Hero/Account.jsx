import React, {useState} from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import Navbar from "../Navbar/Navbar"; // Assuming Navbar is exported as the default export from './Navbar'

import Slider from "../Slider";
// import Slider from "../Slider";
import donationWebsiteImage from '../../assets/img6.jpeg'
import container2img1 from '../../assets/img5.jpeg'


const Account = () => {
 
  const ngos = [
    {
      name: "NGO 1",
      description: "NGO 1 helps provide clean water to communities in need.",
    },
    {
      name: "NGO 2",
      description:
        "NGO 2 focuses on education initiatives for underprivileged children.",
    },
    {
      name: "NGO 3",
      description: "NGO 3 works towards animal welfare and rescue operations.",
    },
  ];


  

  return (
    <div className="container">
      {/* <h1>Welcome, {user && user.email}</h1> */}
      <Navbar />
      <Slider />
      
      <div className="container2 bg-custom-clip">
        <div className="pandimg">

        <p>
          Welcome to our donation website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <img src={container2img1} alt="" />
        </div>
        <div className="grid-container">
          <div className="text">
            <h2>Support a Cause Today</h2>
            <p>
              Choose from various NGOs and support a cause that resonates with
              you.
            </p>
          </div>
          <div className="image">
            <img src={donationWebsiteImage} alt="Donation Website" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Account;
