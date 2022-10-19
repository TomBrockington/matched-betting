import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';

// dunno if need export or react
export const UserContext = React.createContext()

// name of the provider this is what wraps the other, i.e <app />, files
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 1,
        email: 'email@email.com'
    });

    // this i what whats any pages. Anything in value is sent to that page
    return (
        <UserContext.Provider value={{ user }}>
          {children}
        </UserContext.Provider>
      );
}

export default UserContextProvider