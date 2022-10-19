import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './users/register/Register';
import Login from './users/login/Login';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
