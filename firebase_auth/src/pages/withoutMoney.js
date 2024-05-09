import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_eujmjcn', 'template_dn8a8ge', form.current, {
        publicKey: 'sYcgawOEHBGpUb8PF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <>
    <form
  ref={form}
  onSubmit={sendEmail}
  className="max-w-md mx-auto p-8 bg-gray-800 text-white shadow-lg rounded-lg"
>
  <div className="mb-4">
    <label htmlFor="from_name" className="block text-sm font-bold mb-2">
      Name
    </label>
    <input
      type="text"
      id="from_name"
      name="from_name"
      className="w-full h-10 px-3 bg-transparent border border-white rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="user_email" className="block text-sm font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="user_email"
      name="user_email"
      className="w-full h-10 px-3 bg-transparent border border-white rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-bold mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full px-3 py-2 bg-transparent border border-white rounded-lg focus:outline-none focus:border-blue-500"
    ></textarea>
  </div>
  <div className="mb-4">
    <label htmlFor="user_Pno" className="block text-sm font-bold mb-2">
      Phone No:
    </label>
    <input
      type="tel"
      id="user_Pno"
      name="user_Pno"
      className="w-full h-10 px-3 bg-transparent border border-white rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="user_address" className="block text-sm font-bold mb-2">
      Address
    </label>
    <input
      type="text"
      id="user_address"
      name="user_address"
      className="w-full h-10 px-3 bg-transparent border border-white rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Send
  </button>
</form>;


    




      </>






      );
};

      export default ContactUs;