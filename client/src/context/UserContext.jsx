import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { user } from '../utils/UserData'
import LoggedInUser from '../utils/LoggedInUser';

export const UserContext = React.createContext()
console.log('userContext running');

const initUserState = user



const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState)   
  
  const decoded = LoggedInUser()
  console.log('decodedxx', decoded);

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      );
}

export default UserContextProvider