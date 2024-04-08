import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ onWorkingCapitalClick }) => {
  const [sticky, setSticky] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSMEsHover = () => {
    setDropdownVisible(true);
  };

  const handleSMEsLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul>
        <li>
          {/* <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
            Enterprise
          </ScrollLink> */}
        </li>
        <li
          onMouseEnter={handleSMEsHover}
          onMouseLeave={handleSMEsLeave}
          className={`dropdown-trigger ${dropdownVisible ? 'active' : ''}`}
        >
          <ScrollLink to="/hero" smooth={true} offset={0} duration={500}>
            Products
          </ScrollLink>
          <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
            <a href="/Invoice-Discounting">
              Invoice Discounting 
            </a>
            <br/>
            <a href="/Export-Credits">
              Export Credits
            </a>
            <br/>
            <a href="/Vendor-Financing">
              Vendor Financing
            </a>
            <br/>
            <a href="/Credit-Card">
              Credit Cards
            </a>
          </div>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={0} duration={500}>
            Vision
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="container mt-5" smooth={true} offset={0} duration={500}>
            Team
          </ScrollLink>
        </li>
        <li>
          
              <ScrollLink to="contact" smooth={true} offset={0} duration={500}>
                Contact Us
              </ScrollLink>
           
        </li>
        <li>
          <div className="btn-square">
            <button className="btn">
              <a href="/login" target="_blank" rel="noopener noreferrer">Login</a>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
