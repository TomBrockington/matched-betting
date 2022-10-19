import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';
import { user } from '../utils/UserData'
console.log('userxxx', user);


// dunno if need export or react
export const UserContext = React.createContext()
const initUserState = user
console.log('initUserState', initUserState);
// name of the provider this is what wraps the other, i.e <app />, files
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(initUserState)

    useEffect(() => {
      console.log('effecting stuff ');
    }, [])
       

    // this i what whats any pages. Anything in value is sent to that page
    return (
        <UserContext.Provider value={{ user }}>
          {children}
        </UserContext.Provider>
      );
}

export default UserContextProvider