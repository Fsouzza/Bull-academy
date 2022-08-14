import logo from '../../assets/img/foxLogo.png';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu = () =>{
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'treinos',
    to: '/treinos'
  }, {
    label: 'Planos',
    to: '/planos'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }, {
    label: 'Contato',
    to: '/contato'
  }];

  return (
    <nav className={styles.menu}>
      <div>
        <img className={styles.menu__imagem} src={logo} alt="" />
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
      </ul>
      <Link className={styles.menu__btn} to='/login'>
          Login
      </Link>
    </nav>
  );
};