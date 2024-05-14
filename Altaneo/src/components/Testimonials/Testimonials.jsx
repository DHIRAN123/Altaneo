import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import user_5 from '../../assets/user-5.png';
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
                  <h3>CA Deepak Goel</h3>
                  <span>Sahil international PNP</span>
                </div>
              </div>
              <p>Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Further also guide us how to get best Rate of Interest and a great deal. Thanks to them, we've been able to overcome cash flow challenges.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                  <h3>CA gaurav Dhamija</h3>
                  <span>Sahil international PNP</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_5} alt='' />
                <div>
                  <h3>Yogesh Singla</h3>
                  <span>Xieone Lifesciences Limited</span>
                </div>
              </div>
              <p>Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                  <h3>Vinod Kumar</h3>
                  <span>Gr Constuctions</span>
                </div>
              </div>
              <p>Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the construction space who are facing working capital problems to give Altaneo a shot. Their expertise and support have made a significant difference in our operations, and we're grateful for their assistance.</p>
            </div>
          </li>
          
           
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
