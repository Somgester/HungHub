import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="foot-icon" src={assets.logo} alt="" />
            <p>
            HungryHub.com is a leading online food delivery marketplace, focused on connecting consumers and restaurants in all over india. We offer a convenient platform to order food online from a wide network of restaurants and we provide a quick and efficient delivery service.  
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+123-1004762738</li>
                <li>contact@HungryHub.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © HungryHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
