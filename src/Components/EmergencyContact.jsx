import React, { useState } from 'react';

function EmergencyContacts() {
    // Retrieve user details from local storage
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    console.log("Details in Emergency contacts component ~ ", storedDetails)
    // Set initial state with the user details
    const [contacts, setContacts] = useState(storedDetails);
    const [isEditing, setIsEditing] = useState(false);

    console.log("State variable ~ " ,contacts);
    function handleChange(event) {
        const { name, value } = event.target;
        setContacts((prevContacts) => ({
            ...prevContacts,
            [name]: value,
        }));
    }

    function handleSave() {
        // Save the updated contacts to local storage
        localStorage.setItem('userDetails', JSON.stringify(contacts));
        alert('Emergency contacts updated successfully!');
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

     return (
        <div>
            <h2>Emergency Contacts</h2>
            <ul>
                <li>
                    Emergency Contact 1:
                    <input
                        type="number"
                        name="emergencyContact1"
                        value={contacts.emergencyContact1}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                 </li>
        
    
                 <li>
                     Emergency Contact 2:
                     <input
                         type="number"
                         name="emergencyContact2"
                         value={contacts.emergencyContact2}
                         onChange={handleChange}
                         disabled={!isEditing}
                     />
                 </li>
                 <li>
                     Emergency Contact 3:
                     <input
                         type="number"
                         name="emergencyContact3"
                         value={contacts.emergencyContact3}
                         onChange={handleChange}
                         disabled={!isEditing}
                     />
                 </li>
                 <li>
                     Emergency Contact 4:
                     <input
                         type="number"
                         name="emergencyContact4"
                         value={contacts.emergencyContact4}
                         onChange={handleChange}
                         disabled={!isEditing}
                     />
                 </li>
                 <li>
                     Emergency Contact 5:
                     <input
                         type="number"
                         name="emergencyContact5"
                         value={contacts.emergencyContact5}
                         onChange={handleChange}
                         disabled={!isEditing}
                     />
                 </li>
             </ul>
             
    {isEditing ? (
                 <button onClick={handleSave}>Save</button>
             ) : (
                 <button onClick={handleEdit}>Edit</button>
             )}
         </div>
    
     ); 
}

export default EmergencyContacts;
