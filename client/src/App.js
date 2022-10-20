import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './users/register/Register';
import Login from './users/login/Login';
import Calculator from './pages/calculator/Calculator';
import Forum from './pages/forum/Forum';


function App() {
  console.log('app');
  return (
    <>
      <Routes>
        
        <Route element={<CheckLoggedInStatus />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  );
}

export default App;

function isLoggedIn() {
  const loadedToken = localStorage.getItem('token');
  console.log('loadedToken', loadedToken);
  return loadedToken
}

const CheckLoggedInStatus = ({ children, redirectPath = '/'}) => {
  if (isLoggedIn()) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div>
      {children}
    </div>
  )
}
