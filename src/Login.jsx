import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function Login(){
    const [email, setemail]= useState()
    const [password, setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.status ===200){
                localStorage.setItem("username",result.data.name)
                localStorage.setItem("useremail",result.data.email)
                alert("loggin")
                navigate('/home')
            }
           
        
    })
        .catch(err => console.log(err))
    }
    return(

        <div>
            <form onSubmit={handleSubmit}className=" bg-secondary vh-100">
                <h1>Login</h1>
            <div className="mb-3"> 
                <label htmlFor="email">
                    <strong>email</strong>
                </label>
                <input type="text"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setemail (e.target.value)}
            />
                </div>
                <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="text"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword (e.target.value)}
            />
            <button type="submit" >Login</button>
        </div>
        </form>
        </div>
    )
}

export default Login;