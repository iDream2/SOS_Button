import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        password: '',
        emergencyContact1: '',
        emergencyContact2: '',
        emergencyContact3: '',
        emergencyContact4: '',
        emergencyContact5: '',
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    function handleRegister(event) {
        // Prevent form submission
        event.preventDefault();

        // Submit the details to the backend and then redirect to the Home Page
        // Store the user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(formDetails));
        console.log(formDetails);

        // Set the login status to true in local storage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to the homepage
        navigate("/");

        // Fetch request example (commented out as not in use)
        // fetch("https://fakestoreapi.com/users", {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: formDetails.email,
        //         username: 'johnd',
        //         password: formDetails.password,
        //         name: {
        //             firstname: formDetails.firstName,
        //             lastname: formDetails.lastName,
        //         },
        //         address: {
        //             city: 'kilcoole',
        //             street: '7835 new road',
        //             number: 3,
        //             zipcode: '12926-3874',
        //             geolocation: {
        //                 lat: '-37.3159',
        //                 long: '81.1496'
        //             }
        //         },
        //         phone: formDetails.contactNumber,
        //     })
        // }).then((response) => response.json()).then((data) => console.log(data));
    }

    return (
        <div>``
            <form onSubmit={handleRegister}>
                <label htmlFor="FirstName"> First Name
                    <input type="text" name="firstName" onChange={handleChange} value={formDetails.firstName} />
                </label>
                <label htmlFor="LastName"> Last Name
                    <input type="text" name='lastName' onChange={handleChange} value={formDetails.lastName} />
                </label>
                <label>Email
                    <input type="email" name='email' onChange={handleChange} value={formDetails.email} />
                </label>
                <label htmlFor="">Password
                    <input type="password" name='password' onChange={handleChange} value={formDetails.password} />
                </label>
                <label>Your Contact Number
                    <input type="number" name='contactNumber' onChange={handleChange} value={formDetails.contactNumber} />
                </label>
                <h2>Emergency Contacts ~ </h2>
                <label htmlFor=""> Emergency Contact 1
                    <input type="number" name='emergencyContact1' onChange={handleChange} value={formDetails.emergencyContact1} />
                </label>
                <label htmlFor="">Emergency Contact 2
                    <input type="number" name='emergencyContact2' onChange={handleChange} value={formDetails.emergencyContact2} />
                </label>
                <label htmlFor="">Emergency Contact 3
                    <input type="number" name='emergencyContact3' onChange={handleChange} value={formDetails.emergencyContact3} />
                </label>
                <label htmlFor="">Emergency Contact 4
                    <input type="number" name='emergencyContact4' onChange={handleChange} value={formDetails.emergencyContact4} />
                </label>
                <label htmlFor="">Emergency Contact 5
                    <input type="number" name='emergencyContact5' onChange={handleChange} value={formDetails.emergencyContact5} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
