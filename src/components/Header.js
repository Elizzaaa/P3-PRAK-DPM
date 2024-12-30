import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaInstagram size={40} color="purple" />
        <span>Instagram</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
