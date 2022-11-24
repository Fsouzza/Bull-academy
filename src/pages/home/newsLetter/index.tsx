import styles from './Newsletter.module.scss';
import {RiSendPlaneFill} from 'react-icons/ri';

const NewsLetter = () =>{
  return(
    <div>
      <div className={styles.titulo}>
        <span className='stroke-text'>News</span>
        <span>Letter</span>
      </div>
      <section className={styles.newsletter}>
        <div className={styles.newsletter__esquerda}>
          <p>Deseja ter acesso a promoções <span>exclusivas</span> ?</p>
          <p>Obtenha promoções em primeira mão diretamente em seu e-mail e a diversos códigos também que variam de 10% à 25% no valor mensal.</p>
        </div>
        <div className={styles.newsletter__direita}>
          <input placeholder='Seu email aqui'></input>
          <button>
            <div>
              Inscreva-se
              <RiSendPlaneFill size={20} />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;