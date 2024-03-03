// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/account">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Contact Address */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Address</h2>
            <address>
              123 Main Street, <br />
              City Name, <br />
              Country Name
            </address>
            {/* Add more addresses as needed */}
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
            <p>Phone: +1234567890</p>
            <p>WhatsApp: +1234567890</p>
            <p>Email: example@example.com</p>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for updates</p>
            {/* Add newsletter subscription form if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
