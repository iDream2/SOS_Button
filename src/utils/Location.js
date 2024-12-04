import React, { useContext } from 'react';
import { LocationContext } from '../store/LocationContext';

function Location() {
  const locationDetails = useContext(LocationContext);
  console.log(locationDetails);
}
