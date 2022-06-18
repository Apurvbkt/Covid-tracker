import {Link}  from "react-router-dom"
import { useNavigate } from "react-router-dom"


import  React, { useState } from "react"
import axios from "axios"
import "./register.css"

let arr=[]


export const Signup = ()=>{


    const navigate =useNavigate()
    const [user,setUser] = useState({
        name:"",
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

    const register   =()=>{
        const {name,email,password} = user
        
        if(name && email  && password ){
           
            axios.post("http://localhost:2345/register",user).then(res=>{
                alert("register succesfull")
              navigate("/login")
        
        })
           

        }else{
            alert ("Please fill all the spaces")
        }
       
    }

    return(
    <div className="back-ground">
        <h1>Welcome To World Covid Tracker</h1>
        <br />
        {/* <br /> */}
        {/* <br />
        <br /> */}
        <div className="r2">
                {/* {console.log(user)} */}
            <p className="r1">Join To See Daily Covid Update</p>
            <input className="r3" type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange}/>
            <br />
            <br />
            <input className="r3" type="text" name="email" value={user.email} placeholder="Enter Your E-mail"  onChange={handleChange}/>
            <br /><br />
            <input className="r3" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}/>
            <br />
            <br />
            <button className="r4" onClick={register}>Create Account</button>
            
            
            <br />
            <br />
            <label className="label" htmlFor="">Already have account ?</label>
            <Link className="link" to="/login">Login</Link>
            <br />
            <br />
            {/* <button className="r4">Log in</button> */}
            
            </div>
            {user.name}
    </div>
    )
}