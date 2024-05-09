import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const menuData = [
    {
      path: '/account',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/ContactUs',
      name: 'Contact'
    },
    {
      path: '/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/Gmap',
      name: 'Gmap'
    },
    

    
  ];

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
      <div className="container mx-auto">
        <div className="flex m-0.5 justify-between items-center">
          <NavLink to="/account" className="text-white font-bold text-xl">
          Heartful Hand Foundation 
          </NavLink>
          <div className="flex space-x-4">
            {menuData.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                className="text-white hover:text-gray-300"
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
