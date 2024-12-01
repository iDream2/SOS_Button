import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EmergencyContacts from './EmergencyContact.jsx';
import Location from './Location.jsx';
import { LocationProvider } from '../store/LocationContext.jsx';
function Home() {

    //First check if the Login details are there. Then if the user is logged in, then we'll remove the login button. If not. Then on clicking the SOS button, a modal we'll show up and request us to login first.
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);


  const handleSOSClick = () => {
    if (!isLoggedIn) {
      alert('Please log in first.');
    } else {
      console.log('SOS button clicked!');
      // Add SOS functionality here
    }
  };

  return( 
    <div>
        <button onClick={handleSOSClick}>SOS button</button>
        {!isLoggedIn && <Link to="/login"><button>Login</button></Link>}
        {isLoggedIn && (
            <div>
              <LocationProvider>
                <Location />
              </LocationProvider>
              <EmergencyContacts />
            </div>
        ) }
    </div>
  )
}

export default Home