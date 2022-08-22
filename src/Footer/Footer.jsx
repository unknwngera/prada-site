import React from 'react'
import locator from './locator.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import facebook from './facebook.png'
import youtube from './youtube.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-lists">
                <div className="footer-lists-company">
                    <ul>
                        <li><h1 className='footer-title'>COMPANY</h1></li>
                        <li className='footer-li'><a href="#">Fondazione Prada</a></li>
                        <li className='footer-li'><a href="#">Prada Group</a></li>
                        <li className='footer-li'><a href="#">Luna Rossa</a></li>
                        <li className='footer-li'><a href="#">Sustainability</a></li>
                        <li className='footer-li'><a href="#">Work with us</a></li>
                    </ul>
                    <div className="store-locator">
                        <img src={locator} alt="" />
                        <a href="#">Store Locator</a>
                    </div>
                </div>
                <div className="footer-lists-terms">
                    <ul>
                        <li className='footer-li'><h1 className='footer-title'>LEGAL TERMS AND CONDITIONS</h1></li>
                        <li className='footer-li'><a href="#">Legal Notice</a></li>
                        <li className='footer-li'><a href="#">Privacy Policy</a></li>
                        <li className='footer-li'><a href="#">Cookie Policy</a></li>
                        <li className='footer-li'><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-follow-us">
                <h1 className='footer-title'>FOLLOW US</h1>
                <div className="links">
                    <a href="#"><img src={twitter} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={youtube} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer