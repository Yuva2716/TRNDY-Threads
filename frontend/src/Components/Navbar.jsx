import React,{useState} from 'react'
import Navlogo from "../assets/Trndy.png"
import { signOut } from "firebase/auth"
import auth from '../Config/firebase'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"
import Swal from 'sweetalert2'
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar'


const Navbar = () => {
    
    const [sidebarOpen,setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
    
    const navigate = useNavigate()

    const handleLogout = ()=>{        
        signOut(auth).then(()=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You want to logout!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Logged out!",
                    text: "You are successfully logout.",
                    icon: "success"
                  });
                  navigate("/")                  
                }
              });
            
        }).catch((error)=>{
            console.error("Error in signing out", error)
        })
    }


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-lg">
            <div className="container-fluid nav-cont-1">
                <Link to="/landing">
                    <img className="navbar-brand img-fluid nav-logo" src={Navlogo} style={{height:"65px",width:"55px",marginLeft:"20px",borderRadius:"50%"}} />                    
                </Link>
                <h3 className='text-light float-end d-sm-none' onClick={toggleSidebar} ><GiHamburgerMenu /></h3>
                <div className="collapse navbar-collapse d-lg-flex justify-content-end d-none" id="navbarNav" style={{width:"60%"}}>
                    <ul className="navbar-nav" style={{gap:"35px"}}>
                        <li className="nav-item">
                            <Link to="/landing" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">Home</h6></Link>                                                                                                                                                   
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">Products</h6></Link>                            
                        </li>                        
                        <li className="nav-item">
                            <Link to="/about" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">About</h6></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">Contact Us</h6></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">Cart</h6></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/loginadmin" className='text-decoration-none'><h6 className="nav-link active text-warning" aria-current="page">Admin</h6></Link>
                        </li>
                        <li className="nav-item">
                            <h6 className="badge text-light bg-danger rounded-pill pointer" onClick={handleLogout} aria-current="page">Logout</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Navbar