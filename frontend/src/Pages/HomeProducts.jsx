import React from 'react'
import '../Styles/HomeProducts.css'
import menfashion from '../assets/p_img39.png'
import womenfashion from '../assets/p_img1.png'
import kidsfashion from '../assets/p_img30.png'
import tshirt from '../assets/p_img31.png'
import hoodies from '../assets/p_img51.png'
import shoes from '../assets/p_img54.jpg'
import access from '../assets/OIP (1).jpg'

const HomeProducts = () => {
  return (
    <>
     <div className="Home-Products bg-dark d-flex">
        <div className="card my-2 mx-3">                
                <img src={menfashion} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Shits & Pants</p>                
        </div>

        <div className="card my-2 mx-3">                
                <img src={womenfashion} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Tops & Tunics</p>                
        </div>  

        <div className="card my-2 mx-3">                
                <img src={kidsfashion} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Kids Fashion</p>                
        </div>
                
        <div className="card my-2 mx-3">                
                <img src={tshirt}  className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">T-Shirts & Tees</p>                
        </div>

        <div className="card my-2 mx-3">                
                <img src={hoodies}  className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Hoodies</p>                
        </div>

        <div className="card my-2 mx-3 d-sm-none">                
                <img src={access}  className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Accessories</p>                
        </div>

     </div>        
    </>
  )
}

export default HomeProducts