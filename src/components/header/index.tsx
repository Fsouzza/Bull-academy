import logo from '../../assets/img/foxLogo.png';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () =>{
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Planos',
    to: '/planos'
  }, {
    label: 'Sobre Nós',
    to: '/sobre'
  }, {
    label: 'Login',
    to: '/login'
  }];

  return (
    <nav className={styles.menu}>
      <img className={styles.menu__imagem} src={logo} alt="" />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to='/login'>
          Acesse
      </Link>
    </nav>
  );
};