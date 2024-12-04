import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    function validate() {
        let emailError = '';
        let passwordError = '';

        if (!loginDetails.email) {
            emailError = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(loginDetails.email)) {
            emailError = 'Email address is invalid';
        }

        if (!loginDetails.password) {
            passwordError = 'Password is required';
        } else if (loginDetails.password.length < 6) {
            passwordError = 'Password must be at least 6 characters';
        }

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return false;
        }

        return true;
    }

    const handleLogin = () => {
        const isValid = validate();
        if (isValid) {
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
                localStorage.setItem("stringify", JSON.stringify(response));
                localStorage.setItem("Mytoken", response.data.token); // Assuming login is successful
                localStorage.setItem('isLoggedIn', 'true');
                navigate("/");
            })
            .catch(error => {
                console.error('There was an error logging in!', error);
            });
        }
    }

    return (
        <div>
            <label htmlFor="email"> Email ID
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={loginDetails.email} 
                    required 
                />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </label>
            <label htmlFor="password"> Password
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={loginDetails.password} 
                    required 
                />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </label>
            <button onClick={handleLogin}>Login</button>
            <Link to="/register">Haven't registered? Register Now.</Link>
        </div>
    )
}

export default Login;
