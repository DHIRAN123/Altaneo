import React, { useState } from 'react';
import styles from './login.module.css'; // Import CSS module
import VideoContainer from './VideoContainer'; // Import VideoContainer component

const Login = () => {
  const [loginType, setLoginType] = useState('mobile'); 
  const [mobileNumber, setMobileNumber] = useState(''); 
  const [otp, setOtp] = useState(''); // State for OTP input
  const [showOtpInput, setShowOtpInput] = useState(false); // State to control showing OTP input

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpInput(true); // Show OTP input
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Your OTP verification logic here
    console.log('Verifying OTP:', otp);
    // Reset OTP input
    setOtp('');
  };

  return (
    <div className={styles.loginContainer}>
      <VideoContainer /> {/* Include VideoContainer component */}
      <div className={styles.loginFormContainer}>
        <h2>Login To Be Altaneofied</h2>
        {/* <div className={styles.loginTypeButtons}>
          <button className={loginType === 'mobile' ? styles.active : ''} onClick={() => handleLoginTypeChange('mobile')}>All You Need Is Mobile</button>
        </div> */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobileNumberChange} />
          {!showOtpInput && <button type="submit">Send OTP</button>}
        </form>
        {showOtpInput && (
          <form onSubmit={handleOtpSubmit} className={styles.loginForm}>
            <input type="text" maxLength="4" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} />
            <button type="submit">Verify OTP</button>
          </form>

        )}
      </div>
    </div>
  );
};

export default Login;
