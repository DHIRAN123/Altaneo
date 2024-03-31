import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 Altaneo. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://twitter.com/your_twitter_handle">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/your_facebook_page">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/your_instagram_account">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
