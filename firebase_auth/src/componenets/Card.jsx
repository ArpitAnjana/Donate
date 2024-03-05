import React from 'react';
import { Link } from 'react-router-dom';

function Card({ nameofNgo, btnText = "Donate", desc, image }) {
  return (
    <div className="relative h-400 w-300 rounded-md overflow-hidden">
      <img
        src={image}
        alt={nameofNgo}
        className="my-2 z-0 h-full w-full rounded-md object-cover"
        style={{ width: '30vw', height: '50vh' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{nameofNgo}</h1>
        <p className="mt-2 text-sm text-gray-300">
          desc: {desc}
        </p>

        <Link to='/donatecart'>
  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    {btnText} &rarr;
  </button>
</Link>
      </div>
    </div>
  );
}

export default Card;
