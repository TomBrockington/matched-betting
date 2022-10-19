import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './users/register/Register';
import Login from './users/login/Login';
import Calculator from './pages/calculator/Calculator';
import Forum from './pages/forum/Forum';


function App() {
  return (
    <>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  );
}

export default App;
