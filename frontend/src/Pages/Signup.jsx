import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import auth from "../Config/firebase";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Signup.css';

const Signup = () => {
    const [user,setUser] = useState([])
    const [pass,setPass] = useState([])

    const navigate = useNavigate()

    const Signupfunc=()=>{
        createUserWithEmailAndPassword(auth,user,pass)
        .then(()=>{
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Success, Welcome Back!",
                    showConfirmButton: false,
                    timer: 2500
                  });
            navigate('/landing')
        })        
        .catch((error)=>console.log(error))
    }

  return (
     <div className="signup-page">
          <div className="container-signup">
            <h1 className="mb-4 text-dark text-center">Signup Here !!</h1>
            <input onChange={(e)=>{setUser(e.target.value)}} className="input-signup"  placeholder="Enter your e-mail"></input>
            <br />
            <input onChange={(e)=>{setPass(e.target.value)}} className="input-signup" placeholder="Enter your Password"></input>
            <br />        
            <button onClick={Signupfunc} className="btn-signup" >Signup</button>
            <p className="text-light para-signup">If you already have a account <Link className="text-dark fw-bold" to={'/'}>Login</Link> here</p>
          </div>
     </div>
    
  )
}

export default Signup