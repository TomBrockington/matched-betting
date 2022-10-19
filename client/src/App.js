import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './users/register/Register';
import Login from './users/login/Login';
import Calculator from './pages/calculator/Calculator';


function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
