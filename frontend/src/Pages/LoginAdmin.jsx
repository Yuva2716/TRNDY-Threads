import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Config/firebase";
import '../Styles/Login.css'
import Swal from 'sweetalert2'
import Navbar from "../Components/Navbar";


const LoginAdmin = () => {
    const [user,setUser] = useState([])
    const [pass,setPass] = useState([])

    const navigate = useNavigate()
       
    const loginfunc=()=>{
        signInWithEmailAndPassword(auth,user,pass)
        .then(()=>{
            if(user == import.meta.env.VITE_ADMIN_LOGIN_MAIL && import.meta.env.VITE_ADMIN_LOGIN_PASS){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully login as Admin!",
                    showConfirmButton: false,
                    timer: 2500
                  });
                navigate('/admin')
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Admin only Authenticate this Page!",
                    
                  });               
                  navigate('/loginadmin')  
            }                          
        })
        .catch((error)=>console.log("Invalid login credentitials", error))
    }

  return (
    <>
    <Navbar />
    <div className="login-page">
            <div className="container-login">
                <h1 className="mb-4 text-dark text-center">Login as Administrator !!</h1>
                <input className="input-login" onChange={(e)=>{setUser(e.target.value)}}   placeholder="Enter your e-mail"></input>
                <br />
                <input className="input-login" onChange={(e)=>{setPass(e.target.value)}}  placeholder="Enter your Password"></input>
                <br />
                <button className="btn-login" onClick={loginfunc} >Login</button>                       
            </div>
    </div>
    </>
  )
}

export default LoginAdmin