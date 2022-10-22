import jwt_decode from 'jwt-decode';


export default function LoggedInUser() {    
    const loadedToken = localStorage.getItem('token');
    console.log('loadedToken', loadedToken);
    if (loadedToken === null || loadedToken === '') {
        return null;
      }

      const decoded = jwt_decode(loadedToken);
      console.log('decoded', decoded);

      return decoded;
  }