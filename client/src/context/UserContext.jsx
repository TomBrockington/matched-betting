import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { user } from '../utils/UserData'
import LoggedInUser from '../utils/LoggedInUser';
import {  } from '../api/Requests';

export const UserContext = React.createContext()

const initUserState = user

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState)   
  
  const decodedUserData = LoggedInUser()

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider> 
      );
}

export default UserContextProvider