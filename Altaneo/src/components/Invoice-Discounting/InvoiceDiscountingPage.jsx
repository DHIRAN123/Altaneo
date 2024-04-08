// InvoiceDiscountingPage.jsx

import React from 'react';
import Touch from '../Touch/Touch';
import Numbers from '../Customerbasenumber/Numbers';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import Partner from '../Partners/Partners';
import './InvoiceDiscountingPage.css';
import Services from '../Services/Services';
import BothScreens from '../Screens/BothScreens';


const InvoiceDiscountingPage = () => {
  return (
    <div className="invoice-discounting-container">
      <div className="container">
        <Title subTitle="Altaneo For Bill Discounting" title="We Offer Wide Ranges" />

        {/* Card with hover effect */}
        <div className="invoice-discounting-card">
          <div className="card-body">
            <h5 className="card-title">Optimize Your Working Capital</h5>
            <p className="card-text">
              Optimize your working capital with Altaneo's innovative bill discounting services. At Altaneo, we offer unparalleled solutions to help you monetize your accounts receivable efficiently. By leveraging our services, you gain immediate access to funds, empowering you to seize growth opportunities, meet operational expenses, and enhance liquidity with ease. What sets Altaneo apart is our commitment to delivering exceptional value to our clients. We prioritize transparency, reliability, and flexibility in our services, ensuring that you receive tailored solutions that align perfectly with your business needs. Our team of experts combines cutting-edge technology with deep industry knowledge to provide seamless and efficient bill discounting processes. With Altaneo, you can trust that your working capital optimization is in capable hands, allowing you to focus on driving your business forward confidently.
            </p>
          </div>
        </div>

        {/* Additional content cards */}
        <div className="additional-content">
          <div className="additional-content-card">
            <h5 className="card-title">Enhanced Purchasing Power</h5>
            <p className="card-text">With Altaneo's corporate credit card solutions, you can enjoy enhanced purchasing power, enabling you to make necessary business purchases conveniently and efficiently.</p>
          </div>
          <div className="additional-content-card">
            <h5 className="card-title">Tailored Rewards and Benefits</h5>
            <p className="card-text">Our corporate credit card solutions come with tailored rewards and benefits designed to meet the unique needs of your business. Earn rewards on your everyday business expenses and enjoy exclusive perks.</p>
          </div>
          <div className="additional-content-card">
            <h5 className="card-title">Expense Management Insights</h5>
            <p className="card-text">Gain insights and control over your expenses with Altaneo's corporate credit card solutions. Track spending, monitor transactions, and optimize cash flow with advanced expense management tools.</p>
          </div>
        </div>
    

        <BothScreens/>
    
        <Title subTitle='Committed Numbers ' title='Satisfied Base Customers' />
        <Numbers />
        <Services/>
        <Title subTitle="Businesses Altaneofied" title="Where are you?" />

<Partner />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Touch />
        <Footer />
      </div>
    </div>
  );
};

export default InvoiceDiscountingPage;
