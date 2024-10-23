import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import "../Styles/Products.css"
import '../Components/Navbar'
import Navbar from '../Components/Navbar'

const Products = () => {
  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(true)  

  const getProducts = async () => {
    const response = await fetch('http://localhost:5000/products')
    const result = await response.json()
    if(result.status == 200){
      setProducts(result.products);
      console.log(result.products)      
    }else{
      console.error('Failed to fetch products',result)
    }        
    setLoading(false)
}

  useEffect(()=>{
      getProducts();
  },[])

  if(loading){
    return(
      <>
        <Navbar />
          <div className='d-flex justify-content-center Loading-btn'>       
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
      <div className='product-list bg-dark'>
        {products.map((product)=>(
          <ProductCard key={product._id} product={product}  /> 
        ))}
      </div>
    </>    
  )
}

export default Products