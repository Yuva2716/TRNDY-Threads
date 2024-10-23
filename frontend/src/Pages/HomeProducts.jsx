import React from 'react'
import '../Styles/HomeProducts.css'
import menfashion from '../assets/p_img39.png'
import womenfashion from '../assets/p_img1.png'
import kidsfashion from '../assets/p_img30.png'
import tshirt from '../assets/p_img31.png'
import hoodies from '../assets/p_img51.png'

const HomeProducts = () => {
  return (
    <>
     <div className="Home-Products p-3 bg-dark d-flex">
        <div className="card my-2 mx-3" style={{width:"14rem",height:'18rem'}}>                
                <img src={menfashion} style={{width:"14rem"}} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Shits & Trousers</p>                
        </div>

        <div className="card my-2 mx-3" style={{width:"14rem",height:'18rem'}}>                
                <img src={womenfashion} style={{width:"14rem"}} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Tops & Tunics</p>                
        </div>  

        <div className="card my-2 mx-3" style={{width:"14rem",height:'18rem'}}>                
                <img src={kidsfashion} style={{width:"14rem"}} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Kids Fashion</p>                
        </div>

        <div className="card my-2 mx-3" style={{width:"14rem",height:'18rem'}}>                
                <img src={tshirt} style={{width:"14rem"}} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">T-Shirts & Tees</p>                
        </div>

        <div className="card my-2 mx-3" style={{width:"14rem",height:'18rem'}}>                
                <img src={hoodies} style={{width:"14rem"}} className="card-img-top" alt="..." />
                <p className="card-text badge text-dark bg-warning">Hoodies</p>                
        </div>

     </div>        
    </>
  )
}

export default HomeProducts