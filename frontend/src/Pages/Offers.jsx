import mensOffer from '../assets/bannermens.png'
import womensoffer from '../assets/bannerwomens.png'
import kidsoffer from '../assets/bannerkids.png'
import offer from '../assets/banneroffer.png'
import React from 'react'

const Offers = () => {


  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <img src={mensOffer} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src={womensoffer} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src={kidsoffer} className="d-block w-100" alt="..." />
              </div>              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}

export default Offers
