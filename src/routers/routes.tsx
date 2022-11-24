import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const PagePadrao =lazy(() => import('components/pagePadrao'));
const AulasFree =lazy(() => import('pages/aulasFree/aulasFree'));
const Home =lazy(() => import('pages/home/home'));
const NotFound =lazy(() => import('pages/notFound/notFound'));
const Planos =lazy(() => import('pages/planos/planos'));
const Player =lazy(() => import('pages/player/player'));
const Sobre =lazy(() => import('pages/sobre/sobre'));
const Login = lazy(() => import('pages/login/login'));
const Register = lazy(() => import('pages/register/register'));
const AulasExclusivas = lazy(() => import('pages/aulasExclusivas/aulasExclusivas'));


export const AppRouter = () =>{
  return(
    <Router>
      <Suspense fallback={'Carregando...'}>
        <Routes>
          <Route path='/' element={<PagePadrao />} >
            <Route index element={<Home />} />
            <Route path='treinos' element={<AulasFree />} />
            <Route path='planos' element={<Planos />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='exclusivos' element={<AulasExclusivas />} />
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='video/:id' element={<Player />}/>
        </Routes>
      </Suspense>
    </Router>
  );
};