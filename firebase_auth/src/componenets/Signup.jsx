import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <div
        className='max-w-[100vw] h-[100vh] mx-auto my-0 p-4 flex justify-center items-center'
        style={{
          background: `url('https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80')`, // Background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px', // Optional: Add border-radius for rounded corners
          backdropFilter: 'blur(10px) brightness(0%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontFamily: 'fantasy',
          opacity: '0.8', // Set the transparency level here
        }}
      >
        <div
          className='max-w-[400px] w-full px-8 py-6 bg-gray-800 bg-opacity-50 rounded-lg'
        >
          <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
          <p className='py-2'>
            Already have an account yet?{' '}
            <Link to='/' className='underline'>
              Sign in.
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            {/* Error message display */}
            {error && <p className="text-red-500">{error}</p>}
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='mt-4 form-control border p-3'
                type='email'
                style={{ color: 'black' }} // Set font color to black
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='t-4 form-control border p-3'
                type='password'
                style={{ color: 'black' }} // Set font color to black
              />
            </div>
            <button className='mb-2 btn btn-light mt-2 border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
