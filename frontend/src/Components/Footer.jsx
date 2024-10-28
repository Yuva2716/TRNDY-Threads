import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='container-fluid bg-dark text-warning d-flex justify-content-around footer'>
            <p className='footer-text-1'>© 2024 TRNDY Threads. All rights reserved.</p>
                <div className="sm-logos">
                    <FaFacebook />
                    <FaSquareXTwitter />
                    <FaSquareInstagram />
                    <FaYoutube /> 
                    <FaLinkedin />
                </div>
            <p className='footer-text-2'>Terms & Conditions <span> Policy</span></p>
        </div>
    </>
  )
}

export default Footer