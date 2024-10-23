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
        <footer className='navbar navbar-expand-lg navbar-dark bg-dark text-warning d-flex justify-content-around'>
            <p className='footer-text-1'>© 2024 TRNDY Threads. All rights reserved.</p>
                <div className="sm-logos fs-4 d-flex gap-3 w-25">
                    <FaFacebook />
                    <FaSquareXTwitter />
                    <FaSquareInstagram />
                    <FaYoutube /> 
                    <FaLinkedin />
                </div>
            <p className='footer-text-2'>Terms & Conditions <span>Policy</span></p>
        </footer>
    </>
  )
}

export default Footer