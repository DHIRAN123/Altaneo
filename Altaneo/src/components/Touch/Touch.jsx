import React, { useState } from 'react';
import axios from 'axios';
import './Touch.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Touch = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [submissionStatus, setSubmissionStatus] = useState(''); // State to track submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmissionStatus('Submitting...'); // Set submission status to "Submitting..."
      const response = await axios.post('http://localhost:8080/submitContactForm', formData);
      console.log(response.data); // Handle successful response
      setSubmissionStatus('Submitted'); // Set submission status to "Submitted"
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setSubmissionStatus(''); // Reset submission status after successful submission
    } catch (error) {
      console.error('Error:', error); // Handle error
      setSubmissionStatus(''); // Reset submission status in case of error
    }
  };
  

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our customers.</p>
        <ul>
          <li><img src={mail_icon} alt=""/>info@altaneofin.in</li>
          <li><img src={phone_icon} alt=""/>+91 9992278688</li>
          <li><img src={location_icon} alt=""/>GURUGRAM <br />Minions Ventures Pvt. Ltd. (KredX) Wing ‘A’, Ground Floor, Office-1, Block- ‘A’, “SALARPURIA SOFTZONE, Bellandur Village, Varthur Hobli, Bangalore South Taluk, Outer Ring Road, Bangalore – 560103</li>
          <li><img src={location_icon} alt=""/>DELHI<br/>Minions Ventures Pvt. Ltd. (KredX) Wing ‘A’, Ground Floor, Office-1, Block- ‘A’, “SALARPURIA SOFTZONE, Bellandur Village, Varthur Hobli, Bangalore South Taluk, Outer Ring Road, Bangalore – 560103</li>
        </ul>
      </div>
      <div className='contact-col'></div>
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' value={formData.phone} onChange={handleChange} required/>
        <label>Email</label>
        <input type="email" name='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange} required/>
        <label>Write your message</label>
        <textarea name="message" rows="6" placeholder='Enter your message' value={formData.message} onChange={handleChange} required></textarea>
        <button type='submit' className='btn dark-btn' disabled={submissionStatus === 'Submitting...' || submissionStatus === 'Submitted'}>
          {submissionStatus || 'Submit now'} <img src={white_arrow} alt="" />
        </button>
      </form>
    </div>
  )
}

export default Touch;
