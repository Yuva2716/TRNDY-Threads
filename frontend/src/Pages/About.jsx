import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/About.css'

import img1 from '../assets/hero_img.png'
import img2 from '../assets/Mensbanner.jpg'
import img3 from '../assets/goal.png'
import img4 from '../assets/communication.png'
import img5 from '../assets/contactus.jpg'


const About = () => {
  return (
    <>
      <Navbar />
        <div className='container-fluid about-page bg-dark text-light'>
          
          <div className='container-fluid d-flex text-1'>
            <div className="content-1">          
              <h3 className='text-warning fw-bold'>Welcome to TRNDY Threads!</h3>
              <p>At TRNDY Threads, we’re not just another online fashion store—we’re your fashion destination. We believe that style is a personal expression and we’re here to help you define yours. From chic dresses to the latest fashion-forward items, our curated collections are designed to make you look and feel fabulous.</p>            
            </div>
            <div className="img-1 img-fluid"><img src={img1} alt="" /></div>
          </div>
          
          <div className='container-fluid d-flex text-2'>
          <div className="img-2 img-fluid"><img src={img2} alt="" /></div>
            <div className="content-2">          
              <h3 className='text-warning fw-bold'>Our Mission</h3>
              <p>Our mission is simple: to empower you with unique, high-quality fashion pieces that let you stand out. We are committed to delivering the latest trends, ensuring you’re always ahead of the curve. Whether you’re dressing up for a special occasion or just embracing your everyday style, TRNDY Threads has got you covered.</p>
            </div>            
          </div>

          <div className='container-fluid d-flex text-3'>
            <div className="content-3">          
              <h3 className='text-warning fw-bold'>Why TRNDY Threads?</h3>
              <ol>
                <li><b>Curated Collections:</b><span>We handpick each piece to ensure it meets our high standards of style, quality, and uniqueness.</span></li>
                <li><b>Affordable Luxury:</b><span>We believe great fashion should be accessible to everyone. Our prices reflect that commitment.</span></li>
                <li><b>Sustainable Fashion:</b><span>We’re committed to sustainable practices and sourcing our products responsibly.</span></li>
              </ol>
            </div>
            <div className="img-3 img-fluid"><img src={img3} alt="" /></div>
          </div>

          <div className='container-fluid d-flex text-4'>
          <div className="img-4 img-fluid"><img src={img4} alt="" /></div>
            <div className="content-4">          
              <h3 className='text-warning fw-bold'>Join Our TRNDY Community</h3>
              <p>We’re more than just a store; we’re a community of fashion lovers who celebrate individuality and creativity. Follow us on social media, join our newsletter, and be the first to know about our latest drops, exclusive deals, and fashion tips.</p>
            </div>            
          </div>

          <div className='container-fluid d-flex text-5'>
            <div className="content-5">          
              <h3 className='text-warning fw-bold'>Contact Us</h3>
              <p>Got questions or need styling advice? Reach out to our friendly customer service team—we’re here to help you on your fashion journey.</p>
              <p>Welcome to TRNDY Threads, where your style story begins.</p>
            </div>
            <div className="img-5 img-fluid"><img src={img5} alt="" /></div>
          </div>

          <br />

        </div>
      <Footer />
    </>
  )
}

export default About