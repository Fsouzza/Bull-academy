import { Header } from 'components/header';
import { Home } from 'pages/home/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export const AppRouter = () =>{
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
};