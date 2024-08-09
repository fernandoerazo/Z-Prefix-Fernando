import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, AddBox, ShoppingCart, Brightness4, Brightness7 } from '@material-ui/icons';
import './NavBar.css';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <Home />
        <span>Home</span>
      </Link>
      <button onClick={toggleDarkMode}>
        {darkMode ? <Brightness7 /> : <Brightness4 />}
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>
      <Link to="/additems">
        <AddBox />
        <span>Add Items</span>
      </Link>
      <Link to="/checkout">
        <ShoppingCart />
        <span>Check Out</span>
      </Link>
    </nav>
  );
};

export default NavBar;






