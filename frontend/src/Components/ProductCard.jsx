import React from 'react'
import './ProductCard.css'
import Swal from 'sweetalert2'
import { BiSolidCartAdd } from "react-icons/bi"
import { BiSolidOffer } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"

const ProductCard = ({ product }) => {
    const {title,description,price,image,} = product.newProduct;
      console.log(product)  
    const handleAddToCart = async () => {
        const cartItem = {
            productId : product._id,
            title : title,
            price : price,
            image : image,
            quantity : 1,
        }

        const response = await fetch('http://localhost:5000/cart', {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(cartItem),
        })
    
    
        if (response.ok) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${title} is Successfully added to Cart`,
                showConfirmButton: false,
                timer: 2500
              });
        }else {
            alert ("Something went to wrong")
        }
    
    }

    
  return (
    <div className="products d-inline-block my-2 mx-3">                
            <div className="card" style={{width:"17rem"}}>
                <img src={image} style={{height:"15rem"}} className="card-img-top" alt={title} />
                 <div className="card-body">
                    <h5 className="card-title">{title}</h5>                    
                    <div className="product-price-add d-flex justify-content-between">
                        <p className="product-price fw-bold">₹{price} </p>                        
                        <span className="card-text text-success"> <BiSolidOffer /> {description}</span>
                    </div>
                    
                    <div>
                        <span> <TbTruckDelivery /> Free Delivery </span>
                        <button className="add-to-cart-btn btn" onClick={handleAddToCart}> <BiSolidCartAdd /> Add to Cart </button>
                    </div>                    
                </div>
            </div>                  
    </div>
  )
}

export default ProductCard