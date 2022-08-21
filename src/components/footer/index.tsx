import { Link } from 'react-router-dom';
import logowhite from 'assets/img/logoWhite.png';
import styles from './Footer.module.scss';
import {FaFacebook} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import {FiInstagram} from 'react-icons/fi';
import {BiSupport} from 'react-icons/bi';


export const Footer = () =>{
  const rotas = [{
    label: 'Home',
    to: '/'
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

  return(
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={logowhite} />

      <ul className={styles.footer__permalinks}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.footer__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.footer__socials}>
        <a href='https://www.facebook.com' title='Link Facebbok'><FaFacebook /></a>
        <a href='https://www.instagram.com' title='Link Instagram'><FiInstagram /></a>
        <a href='https://twitter.com' title='Link Twitter'><IoLogoTwitter /></a>
        <Link to='' title='Suporte Online ao Cliente'>
          <BiSupport />
        </Link>
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy; Mr Yeagger. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};