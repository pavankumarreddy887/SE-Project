import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './Navbar.css'; // Ensure you have this CSS file created

const Navbar = () => {

const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-login">
          {isLoggedIn ? (
            // <button onClick={logout} className="navbar-link">Logout</button>
            <Link  onClick={logout} className="navbar-link">Logout</Link>
          ) : (
            <Link to="/login" className="navbar-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
