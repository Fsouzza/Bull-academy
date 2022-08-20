import styles from './Newsletter.module.scss';
import {RiSendPlaneFill} from 'react-icons/ri';

export const NewsLetter = () =>{
  return(
    <section className={styles.newsletter}>
      <div className={styles.newsletter__esquerda}>
        <p>Deseja ter acesso a promoções <span>exclusivas</span> ?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, deleniti rem? Earum excepturi omnis velit modi. Necessitatibus, officiis doloremque similique excepturi quis tenetur ipsa eos placeat vitae perspiciatis? Quibusdam, blanditiis.</p>
      </div>
      <div className={styles.newsletter__direita}>
        <input placeholder='Seu Email'></input>
        <button>
          <div>
            Enviar
            <RiSendPlaneFill size={20} />
          </div>
        </button>
      </div>
    </section>
  );
};