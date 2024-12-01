import React from 'react'
import Register from './Register'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const navigate = useNavigate();
    
    const [loginDetails,setLoginDetails] = useState({
        email : '',
        password: ''
    })

    function handleChange(event){
        const {name, value} = event.target;
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [name] : value,
        }) )
    }
    
    const handleLogin = () => {
        axios.post('https://dummyjson.com/auth/login', {
            username: loginDetails.email, // Assuming username is the email here
            password: loginDetails.password,
            expiresInMins: 30, // optional, defaults to 60
        }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false // Include cookies (e.g., accessToken) in the request
        })
        .then(response => {
            console.log(response.data);
            
            const response1 = response;localStorage.setItem("stringify", JSON.stringify(response1))
            localStorage.setItem("Mytoken", response1.data.token) // Assuming login is successful
            localStorage.setItem('isLoggedIn', 'true');
            navigate("/");
        })
        .catch(error => {
            console.error('There was an error logging in!', error);

        });
        
        
        //navigate("/")        
    }

    return (
    <div>
   
    <label htmlFor=""> Email ID
        <input type="email" name='email' onChange={handleChange} value={loginDetails.email}   required/>
    </label>
    <label htmlFor=""> Password
        <input type="password" name='password' onChange={handleChange} value={loginDetails.password} required/>
    </label>
    <button onClick = {handleLogin} >Login</button>
    <Link to = "/register" >Haven't registered ? Register Now.</Link>
    </div>
  )
}

export default Login