import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Config/firebase";
import '../Styles/Login.css'
import Swal from 'sweetalert2'


const Login = () => {
    const [user,setUser] = useState([])
    const [pass,setPass] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Success, Welcome Back!",
                    showConfirmButton: false,
                    timer: 2500
                  });
                navigate('/landing')
            }
            else{
                console.log('failed')
            }
        })
    },[])

    const loginfunc=()=>{
        signInWithEmailAndPassword(auth,user,pass)
        .then(()=>{
            console.log("logged in Successfully")
            navigator('/')
        })
        .catch((error)=>console.log("Invalid login credentitials", error))
    }

  return (
    <div className="login-page">
            <div className="container-login">
                <h1>Login Here !!</h1>
                <input className="input-login" onChange={(e)=>{setUser(e.target.value)}}   placeholder="Enter your e-mail"></input>
                <br />
                <input className="input-login" onChange={(e)=>{setPass(e.target.value)}}  placeholder="Enter your Password"></input>
                <br />
                <button className="btn-login" onClick={loginfunc} >Login</button>
                <p className="para-login">If you don't have a account <Link className="text-dark fw-bold" to={'/signup'}>Singup</Link> here</p>        
            </div>
    </div>
    
  )
}

export default Login