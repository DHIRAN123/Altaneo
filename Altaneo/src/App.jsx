import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Title from './components/Title/Title';
import Numbers from './components/Customerbasenumber/Numbers';
import Testimonials from './components/Testimonials/Testimonials';
import Touch from './components/Touch/Touch';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
import InvoiceDiscountingPage from './components/Invoice-Discounting/InvoiceDiscountingPage';
import ExportCredits from './components/ExportCredits/ExportCredits';
import VendorFinancing from './components/VendorFinancing/VendorFinancing';
import CreditCard from './components/CreditCard/CreditCard';
import Investors from './components/Investors/Investors';
import Login from './components/Login/login';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Routes for pages without Navbar */}
          <Route path={['/login', '/register']} component={Login} />

          {/* Routes for pages with Navbar */}
          <Route>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/Invoice-Discounting' component={InvoiceDiscountingPage} />
              <Route exact path='/Export-Credits' component={ExportCredits} />
              <Route exact path='/Vendor-Financing' component={VendorFinancing} />
              <Route exact path='/Credit-Card' component={CreditCard} />
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Hero />
    <div className='container'>
      <Title subTitle='Our COMMITMENTS' title='What We Offer' />
      <Solutions />
      <About />
      <Title subTitle='Committed Numbers ' title='Satisfied Base Customers' />
      <Numbers />
      <Title subTitle='Leading Investors ' title='Valued From leading brands' />
      <Investors/>
      <Title subTitle='Meet our team' title='Team' />
      <Team />
      <Title subTitle='Testimonials' title='What Customers Says' />
      <Testimonials />
      <Title subTitle='Business Partners' title='Altaneofied' />
      <Partners />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Touch />
      <Footer />
    </div>
  </>
);

export default App;
