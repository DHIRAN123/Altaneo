import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/"><img src={logo} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Empowering Growth Through Seamless Financial Solutions</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  {/* Add social media icons */}
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful links</h3>
                </div>
                <ul>
                  <li><a href="/Invoice-Discounting">Invoice Discounting</a></li>
                  <li><a href="/">Vendor</a></li>
                  <li><a href="/Export-Credits">Export Credits</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="/Vendor-Financing">Vendor financing</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="/Credit-card">Corp. Credit Cards</a></li>
                  <li><a href="#">Expert Team</a></li>
                  <li></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Legal</h3>
                </div>
                <div className="footer-text mb-25">
  <p>Nodal Officer:-</p>
  <p>Meenakshi Pawar</p>
  <p>+91 123456789</p>
  <p><a href="mailto:Email@gmail.com">info@altaneo.com</a></p>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved <a href="">Altaneo</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="/Terms">Terms</a></li>

                  <li><a href="/Privacypolicy">Privacy</a></li>
                  <li><a href="/Refundpolicy">Refund</a></li>
                  <li> <ScrollLink to="contact" smooth={true} offset={0} duration={300}>
                Contact
              </ScrollLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
