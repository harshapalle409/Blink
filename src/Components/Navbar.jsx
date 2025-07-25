import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../images/Logowithoutbg.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveDropdown(''); // Close dropdown when toggling menu
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown('');
  };

  return (
    <nav className="navbar_unique_wrapper">
      <div className="navbar-logo-and-name">
        <img className="navbar-logo-image" src={logo} alt="Blink_Salon_logo" />
        <div className="navbar_unique_logo"></div>
      </div>

      <div className="navbar_unique_toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <ul className={`navbar_unique_links ${menuOpen ? 'show' : ''}`}>
        {/* 🏠 HOME */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            HOME
          </NavLink>
        </li>

        {/* 💇 SERVICES Dropdown */}
        <li className="navbar_unique_dropdown">
          <span
            className="dropdown_trigger"
            onClick={() =>
              setActiveDropdown(activeDropdown === 'services' ? '' : 'services')
            }
          >
            SERVICES ▾
          </span>
          {activeDropdown === 'services' && (
            <ul className="dropdown_menu">
              <li>
                <NavLink
                  to="/services/men"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeMenu}
                >
                  For Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/women"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeMenu}
                >
                  For Women
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* 🖼️ Other Links */}
        <li>
          <NavLink
            to="/Gallery"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            CONTACT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FAQ"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

