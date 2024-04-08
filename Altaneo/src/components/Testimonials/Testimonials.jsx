import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slideForward();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slideForward = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === 3 ? 0 : prevIndex + 1;
      tx = -(nextIndex * 25);
      slider.current.style.transform = `translateX(${tx}%)`;
      return nextIndex;
    });
  };

  return (
    <div className='testimonials'>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' />
                <div>
                  <h3>Meenakshi pawar</h3>
                  <span>Gurugram, Haryana</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                  <h3>Meenakshi pawar</h3>
                  <span>Gurugram, Haryana</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                  <h3>Meenakshi pawar</h3>
                  <span>Gurugram, Haryana</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='' />
                <div>
                  <h3>Meenakshi pawar</h3>
                  <span>Gurugram, Haryana</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
