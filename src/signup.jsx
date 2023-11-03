import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Signup(){
    const [name,setName]= useState()
    const [email,setemail]= useState()
    const [password,setPassword]= useState()
    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        
    })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setName (e.target.value)}
            />
                </div>
                <div>
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
                <div>
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
                </div>
                <button type="submit" >Register</button>
                <p>Already have account</p>
                <Link to="/login" className="btn bg-light">Login</Link>
            </form>
        </div>
    )
    
}

export default Signup;