import logo from '../../assets/img/foxLogo.png';
import styles from './Menu.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { DropdownNotification } from './dropdownMenus/dropdownNotification/DropdownNotification';
import { DropdownSettings } from './dropdownMenus/dropdownSettings/DropdownSettings';
import { DropdownPerfil } from './dropdownMenus/dropdownPerfil/DropdownPerfil';

const rotas = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Planos',
  to: '/planos'
}, {
  label: 'Treinos',
  to: '/treinos'
}, {
  label: 'Sobre',
  to: '/sobre'
}];

export const Menu = () =>{
  const [scroll, setscroll] = useState(false);
  const token = sessionStorage.getItem('token');
  const [userLogin, setUserLogin] = useState<boolean>(token !== null);
  const navigate = useNavigate();
  const clickLogout = () => {
    setUserLogin(false);
    sessionStorage.removeItem('token');
    navigate('/');
  };
  const changeColorOnScroll = () => {
    window.scrollY >= 100 ? setscroll(true) : setscroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColorOnScroll);

    return () => {
      window.removeEventListener('scroll', changeColorOnScroll);
    };
  }, []);

  return (
    <nav className={styles.menu} style={scroll ? {backgroundColor: 'rgba(34, 34, 34, 0.96)', borderBottom: '0.5px solid #404040'} : {backgroundColor: ''}}>
      <div>
        <img className={styles.menu__image} src={logo} alt="" />
        <h1>Bull <br /> Fitness</h1>
      </div>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <NavLink to={rota.to} className={(navData) => navData.isActive ? `${styles.a__active}` : `${styles.a}`}>
              {rota.label}
            </NavLink>
          </li>
        ))}
        { userLogin &&
          (<li className={styles.menu__link}>
            <Link className={styles.menu__label} to='/exclusivos'>
              <span>
                Exclusivos 
                <HiOutlineStatusOnline color='green' />
              </span>
            </Link>
          </li>)
        }
      </ul>
      { !userLogin ?
        (<Link className={styles.menu__btn} to='/login'>
          Acessar
        </Link>) : 
        (<ul className={styles.login}>
          <DropdownNotification />
          <DropdownSettings />
          <DropdownPerfil onClick={clickLogout}/>
        </ul>)
      }
      <Link className={styles.menu__lock} to='/login'>
        <FiLock />
      </Link>
    </nav>
  );
};