import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import your CSS file

import NavbarComponent from '../componenets/Navbar/Navbar';
class About extends Component {
  render() {
    return (
        <>
      
       
     
       <NavbarComponent />
      <div className="pageContainer">
         
          <h1 className="pageTitle">About Us</h1>
          <p className="foundedDate">Founded: Jan 23, 2024</p>
          <p className="aboutText">
              Donate, Period is a web platform that connects donors with the items
              charities need most. We exist to ensure that no great cause is without
              the products needed to provide their valuable services to our community.
          </p>
          <div className="howWeDoItSection">
              <div className="howWeDoItColumn">
                  <h2 className="sectionTitle">How do we do this?</h2>
                  <ul className="bulletList">
                      <li>We work with registered charities to create wishlists of their most needed items.</li>
                      <li>We source these items in bulk at wholesale prices.</li>
                      <li>We invite individuals to purchase and donate these items through our online platform for the causes they care about most.</li>
                      <li>We handle the logistics of delivering the items to the charity.</li>
                  </ul>
              </div>
              <div className="whyTheNameColumn">
                  <h2 className="sectionTitle">What’s with the name?</h2>
                  <p className="aboutText">
                      Donate, Period was originally created to solve the problem of charities
                      serving vulnerable women not having enough sanitary products to meet the
                      needs of the individuals they served. Our belief was that there was a platform
                      that would both make donors aware of the charity’s needs and provide them with
                      a way to make a donation, this problem could be easily resolved.
                      Sanitary products continue to be some of our top donated items.
                  </p>
              </div>
          </div>
          <div className="buttonContainer">
              <Link to={'/charities'} className="linkButton">
                  View our charity partners
              </Link>
              <Link to={'/account'} className="linkButton">
                  Home
              </Link>
          </div>
      </div>
      </>
    )
  }
}

export default About;
