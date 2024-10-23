import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Admin.css'
import Swal from 'sweetalert2'

const Admin = () => {
  const [newproduct, setNewproduct] = useState({
    title:"",
    description:"",
    price:"",
    image:"",
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setNewproduct({...newproduct,[name]:value})
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = ()=>{
      setNewproduct({...newproduct, image:reader.result})
    }
    if(file) {
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/products',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newproduct)
    })
    if (response.ok){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New product Successfully added",
        showConfirmButton: false,
        timer: 1500
      });
      setNewproduct({title:'',description:'',price:'',image:''})      
    }else{
      alert('Failed to add product')
    }
  }

  return (
    <>
      <Navbar />
      <div className='Admin-page'>        
        <form className='Add-product-form' onSubmit={handleSubmit}>
          <h2 className='text-center text-light'>Add new Products</h2>
          <label>Product Title</label>
          <input 
            type="text"
            name='title'
            placeholder='Enter Product Title'
            value={newproduct.title}
            onChange={handleChange}
            required
          />
          <label>Product Description</label>
          <textarea 
            name='description'
            placeholder='Enter Product Description'
            value={newproduct.description}
            onChange={handleChange}
            required
          />
          <label>Product Price</label>
          <input
            type="number"
            name='price'
            placeholder='Enter Product Price'
            value={newproduct.price}
            onChange={handleChange}
            required
          />
          <label>Image URL</label>
          <input
            type="text"
            name='image'
            placeholder='Image URL'
            value={newproduct.image}
            onChange={handleChange}
            required
          />
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
          />
          <button type='submit'>Add Product</button>
        </form>
      </div>      
    </> 
  )
}

export default Admin