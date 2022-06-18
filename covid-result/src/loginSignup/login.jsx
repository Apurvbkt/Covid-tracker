import  React , {useState} from "react"
import {Link}  from "react-router-dom"
 import axios  from "axios"
import "./login.css"
import { useNavigate } from "react-router-dom"




export const Login  = ()=>{

    const  navigate =useNavigate()
    const [user,setUser] = useState({
       
        email:"",
        password:""
    })

    const handleChange =e=>{
        const{name,value} =e.target
        

      
       
        setUser({
            ...user,
            [name]:value,
               
        })
    }

    const login  =() =>{
        axios.post("http://localhost:2345/login",user)
        .then(res=>{alert("login successful ")
           
                navigate("/covid")
            }
           
        )
    }
    
    return(
        <div className="main-div"> 
          <h1>Add Details To Login</h1>
            <br />
            <br />
        <div className="l1">
        <h1>Welcome!</h1>
        {/* <h3>Enter your Mail id</h3> */}
        
     
        <input className="mail" type="text" name="email" value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} />
        <br />
        <br />
        <input className="mail" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
        <br />
        <br />
        <button className="l2" 
        onClick=
        {login}
        >Log in</button>
        <br />
        <br />
        
        
        <br />
        <br />
        {/* <Link to ="signup">Sign up</Link> */}
        <label className="label" htmlFor="">Don't have an account?</label>
        <Link className="link" to="/">Register</Link>
        <br /><br />
        </div></div>
    )
}