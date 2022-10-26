import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './users/register/Register';
import Login from './users/login/Login';
import CalculatorPage from './pages/calculator/CalculatorPage';
import Forum from './pages/forum/Forum';
import Post from './pages/post/Post';
import Lessons from './pages/lessons/Lessons';
import Faq from './pages/faq/Faq';
import Links from './pages/links/Links';
import Account from './pages/account/Account';

function App() {
  console.log('App loaded');
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<CalculatorPage />} />
          <Route path='/lessons' element={<Lessons />} />

        <Route path='/forum' element={<Forum />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/links' element={<Links />} />
        <Route path='/account' element={<Account />} />

        <Route path='/post' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
