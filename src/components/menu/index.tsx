import logo from '../../assets/img/foxLogo.png';
import styles from './Menu.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { useState } from 'react';

export const Menu = () =>{
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
  const token = sessionStorage.getItem('token');
  const [userLogin, setUserLogin] = useState<boolean>(token !== null);
  const navigate = useNavigate();

  const clickLogout = () => {
    setUserLogin(false);
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className={styles.menu}>
      <div>
        <img className={styles.menu__image} src={logo} alt="" />
        <h1>Bull <br /> Fitness</h1>
      </div>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
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
      { !userLogin &&
        (<Link className={styles.menu__btn} to='/login'>
          Acessar
        </Link>)
      }
      { userLogin &&
        (<ul className={styles.login}>
          <li className={styles.login__logado}>
            Minha Conta
            <CgProfile color='#cecece' />
          </li>
          <li className={styles.login__logado} onClick={clickLogout}>
            Logout
            <FiLogOut color='#cecece' />
          </li>
        </ul>)
      }
      <Link className={styles.menu__lock} to='/login'>
        <FiLock />
      </Link>
    </nav>
  );
};