import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div classname="about-left">
            {/* <img src={about_img} alt='' className='about-img'/> */}
            {/* <img src={play_icon} alt='' className='play-icon'/> */}
        </div>
      <div classname="about-right">
<h3>ABOUT ALTANEO </h3>
<h2>Nuturing Tomorrow's Leaders Today</h2>
<p>Altaneo fin is a pioneering fintech company dedicated to transforming supply chain finance. With a keen understanding of the complexities of modern commerce, we offer a diverse range of innovative financial solutions tailored to meet the unique needs of businesses across industries.</p>
<p>Backed by a team of seasoned professionals with extensive experience in finance, technology, and supply chain management, we are committed to delivering unparalleled value to our clients. Our cutting-edge technology platform, coupled with strategic partnerships with leading commercial banks, positions us as a trusted partner for businesses seeking to optimize their working capital, streamline operations, and drive growth.</p>

  </div>
    </div>
  )
}

export default About
