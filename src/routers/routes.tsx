import { PagePadrao } from 'components/pagePadrao';
import { AulasFree } from 'pages/aulasFree/aulasFree';
import { Home } from 'pages/home/home';
import { Planos } from 'pages/planos/planos';
import { Sobre } from 'pages/sobre/sobre';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export const AppRouter = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<PagePadrao />} >
          <Route index element={<Home />} />
          <Route path='treinos' element={<AulasFree />} />
          <Route path='planos' element={<Planos />} />
          <Route path='sobre' element={<Sobre />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
};