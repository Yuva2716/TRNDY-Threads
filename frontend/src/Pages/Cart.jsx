import React, { useEffect, useState } from 'react'
import '../Styles/Cart.css'
import Navbar from '../Components/Navbar'
import { BiSolidCartAdd } from "react-icons/bi"
import { BsFillCartXFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TbTruckReturn } from "react-icons/tb";
import Swal from 'sweetalert2'
import Delivery from './Delivery';

const Cart = () => {

    const [cartItems,setCartItems] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchCartItems = async () => {
        const response = await fetch('https://trndy-threads.onrender.com/cart')
        const data = await response.json()
        setCartItems(data)
        setLoading(false)
    }

    useEffect(()=>{
      fetchCartItems()
    },[])

    const handleDeleteItem = async (id) => {
        const response = await fetch(`https://trndy-threads.onrender.com/cart/${id}`,{
          method: "DELETE",
        })
        if(response.ok){
          
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Removed!",
                text: "Item has been removed.",
                icon: "success"
              })
              setCartItems(cartItems.filter(item=>item._id !== id));              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your cart item is safe :)",
                icon: "error"
              });
            }
          });
                            
        }
    }

    const handleUpdateQuantity = async (id, newQuantity) => {
        const updatedItem = { quantity : newQuantity}

        const response = await fetch(`https://trndy-threads.onrender.com/cart/${id}`,{
          method:"PUT",
          headers:{'Content-Type' : 'application/json' },
          body:JSON.stringify(updatedItem)
        })

        if(response.ok){
          setCartItems(cartItems.map(item=>
            item._id === id ? {...item,quantity:newQuantity} : item
          ))
        }
    }
    
    const handlePlaceOrder = async () => {
      const response = await fetch('https://trndy-threads.onrender.com/cart',{
        method:"DELETE",
      })
      if (response.ok){
        Swal.fire({
          title: "Thank You!",
          text: "Your Order placed Successfully!",
          icon: "success"
        });
        setCartItems([])
      }
    }

    const calculateTotalPrice = () =>{
      return cartItems.reduce((total,item)=>total+item.price * item.quantity,0)
    }

    if(loading){
      return(
        <>
          <Navbar />
            <div className='container-fluid d-flex justify-content-center Loading-btn'>       
              <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </div>
        </>      
      )
    }

  return (
    <>
      <Navbar />
      <div className="container-fluid cart-page bg-secondary">        
        {cartItems.length===0 ? (          
          <div className='text-center empty-cart'>
              <span className='empty-cart-icon'><BsFillCartXFill /></span>
             <h1>Your Cart is Empty</h1>
          </div>
        ):(
          <div className='container-fluid d-flex'>
            <div className="cart-list p-1">
            <h2 className='text-center text-light'>Your Cart <BiSolidCartAdd /> </h2>
              {cartItems.map(item =>(
                  <div key={item._id} className="cart-item d-inline-block my-3 mx-3">
                      <div className="card" style={{width:"15rem"}}>
                      <img src={item.image} style={{height:"14rem"}} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>                      
                      <div className="product-price-add">
                          <span className="product-price fw-bold">Price: ₹{item.price}</span>
                          <label className='qunty-lable'>Qty</label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            className='qunty float-end'
                            onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
                            
                          />
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-danger'> <TbTruckReturn /> No Returns</p>
                        <button className='float-end btn btn-danger p-1 m-1 remove-btn' onClick={() => handleDeleteItem(item._id)}> <RxCross2 /> Remove</button>
                      </div>
                  </div>
              </div>
            </div>
              ))}                                                
            </div>

            <div className="delivery-details bg-light">                             
              <Delivery calculateTotalPrice={calculateTotalPrice} />
            </div>    
          </div>
        )}
        
        

      </div>
    </>
  )
}

export default Cart