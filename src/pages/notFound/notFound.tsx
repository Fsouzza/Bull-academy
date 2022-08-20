import styles from './Notfound.module.scss';
import notFoundImage from 'assets/img/logoError.png';
import { BotaoVoltar } from 'components/btnBack';

export const NotFound = () => {
  

  return(
    <section className={styles.erro}>
      <div className={styles.esquerda}>
        <span  className={styles.esquerda__txt1}>Erro 404</span>
        <span className={styles.esquerda__txt2}>OOPS!... PAGINA NÃO ENCONTRADA</span>
        <h3 className='stroke-text'>Ei Amigo,</h3>
        <p className={styles.esquerda__descricao}>Houve um problema ao carregar a página selecionada.
          <br />
          Infelizmente, isso é tudo que sabemos.
        </p>
        <BotaoVoltar />
      </div>

      <figure className={styles.direita}>
        <img src={notFoundImage} alt='' />
      </figure>
    </section>
  );
};