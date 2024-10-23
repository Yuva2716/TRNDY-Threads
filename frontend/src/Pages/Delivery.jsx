import React, { useEffect, useState } from 'react'
import '../Styles/Delivery.css'
import Swal from 'sweetalert2'
import { TbTruckDelivery } from "react-icons/tb";
import cardimg from '../assets/icons8-credit-card-48.png'
import bhimimg from '../assets/icons8-bhim-48.png'
import gpayimg from '../assets/icons8-google-pay-new-48.png'
import paytming from '../assets/icons8-paytm-48.png'
import cashimg from '../assets/icons8-cash-48.png' 
 
const Delivery = ({calculateTotalPrice}) => {
     const [cartItems,setCartItems] = useState([])   
    const handlePlaceOrder = async () => {
        const response = await fetch('http://localhost:5000/cart',{
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
        

  return (
    <>            
            <div className="form-con">
            
            <form className='Delivery-form'>            
                <h4 className='text-start fs-5 fw-bold'>Delivery Address <TbTruckDelivery /></h4>
                <div className="d-flex justify-content-around names">
                {/* <label>First Name</label> */}
                <input
                    type="text"
                    name='firstName'
                    placeholder='First Name*'
                    required 
                />
                {/* <label>Last Name</label> */}
                <input
                    type="text"
                    name='lastName'
                    placeholder='Last Name*'
                    required 
                />
                </div>
                
                {/* <label>Mobile Number</label> */}
                <div className="numbers d-flex justify-content-around">
                    <input
                        type="number"
                        name='mobileNo'
                        placeholder='Enter Mobile Number*'                                        
                        required
                        className='input-field'
                    />
                    <input
                        type="date"
                        name='DOB'                        
                        required
                        className='input-field'
                    />
                </div>    
                {/* <label>Address</label> */}

                <div className="addressPin d-flex">
                    <textarea
                        name='address'
                        className='address'
                        placeholder='Enter your address*'                    
                        required                    
                    />
                    <input
                        type="number"
                        name='pinCode'
                        placeholder='Enter PinCode*'
                        className='input-pincode'                                        
                        required
                    />
                </div>
                <div className="pay-methods">
                 <h4 className='fs-5 fw-bold'>Payment Methods</h4>                       
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex" id="flush-headingOne">
                            <img src={cardimg} alt="cardimg" />
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Credit / Debit Card 
                            </button>
                            
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body d-flex flex-column">
                                <label>Enter Card Number</label>
                                <input
                                    type="number"
                                    maxLength={16}
                                    placeholder='1234 5678 XXXX XXXX'
                                    className='w-75'
                                />
                                <label>Enter CVC</label>
                                <input
                                    type="number"
                                    maxLength={3}
                                    placeholder='XXX'
                                    className='w-75'
                                />
                                <button className='w-75 rounded btn btn-success mt-2' type='submit'>Make Payment</button>
                            </div>
                            </div>
                        </div>
                                             
                                                
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex" id="flush-headingTwo">
                            <img src={bhimimg} alt="bhimimg" />
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                UPI Methods
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h5 htmlFor='flexRadioDefault' >
                                    <img src={gpayimg}  style={{width:"30px",marginRight:"12px"}} />
                                        Google Pay
                                        <input className="form-check-input float-end" type="radio" name="flexRadioDefault" id="flexRadioDefault"></input>
                                </h5>                                
                                
                                <h5 htmlFor='flexRadioDefault1' >
                                    <img src={paytming}  style={{width:"35px",marginRight:"10px"}} />
                                        Paytm                                        
                                        <input className="form-check-input float-end" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                </h5>
                                <button className='btn btn-primary float-end'>Continue</button>                                
                            </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex" id="flush-headingThree">
                            <img src={cashimg} alt="cashimg" />
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Cash on Delivery
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    if you prefer COD, Kindly click checkbox
                                </label>
                            </div>   
                            </div>
                            </div>
                        </div>

                        <div className="price d-flex m-3 ">
                            <h5 className='text-dark'><b>Total Price:</b> ₹ {calculateTotalPrice()}</h5>                    
                            <button className='Cod-btn' type='submit'onClick={handlePlaceOrder} >Place Order</button>
                        </div>     

                     </div>                        
                </div>                   
            </form>
            </div>        
       
    </>
  )
}

export default Delivery