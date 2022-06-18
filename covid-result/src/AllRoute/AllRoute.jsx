import {Route,Routes} from "react-router-dom"
import React from 'react'
import { Signup } from '../loginSignup/register'
import { Login } from "../loginSignup/login"
import Covid from "../Components/Covid"

const AllRoute = () => {
  return (
    <div>
        <Routes>
                
                <Route path="/" element={<Signup/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/covid" element={<Covid/>}></Route>
            </Routes>
    </div>
  )
}

export default AllRoute
