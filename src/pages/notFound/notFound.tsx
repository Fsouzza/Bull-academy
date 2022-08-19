import styles from './Notfound.module.scss';
import notFoundImage from 'assets/img/logoError.png';
import { BotaoVoltar } from 'components/btnBack';

export const NotFound = () => {
  

  return(
    <section className={styles.erro}>
      <div className={styles.esquerda}>
        <span  className={styles.esquerda__txt1}>Error 404</span>
        <span className={styles.esquerda__txt2}>OOPS!... PAGE NOT FOUND</span>
        <h3 className='stroke-text'>Hey Buddy,</h3>
        <p className={styles.esquerda__descricao}>We can not seem to find the page you request.
          <br />
          Unfortunately, that is all we know.
        </p>
        <BotaoVoltar />
      </div>

      <figure className={styles.direita}>
        <img src={notFoundImage} alt='' />
      </figure>
    </section>
  );
};