import styles from './Endereco.module.scss';
import {BiMap} from 'react-icons/bi';
import {AiOutlineGlobal, AiOutlinePhone} from 'react-icons/ai';

export const Adress = () =>{
  return(
    <div className={styles.endereco}>
      <h3 className={styles.endereco__titulo}>
        <span className='stroke-text'>Nossa</span>
        <span>Localização</span>
      </h3>
      <address className={styles.endereco__address}>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.96617038899!2d-60.03714392177152!3d-3.04465977941144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1661056849275!5m2!1spt-BR!2sbr' width="600" height='400' loading='lazy'></iframe>
        <div className={styles.endereco__cardAddress}>
          <h4>BULL FITNESS WORKOUT LTDA</h4>
          <span><BiMap /> Avenida Delphino Perimental, 4638 - Flores, Cep 69000-000</span>
          <p><AiOutlineGlobal /> www.bullfitness.com.br</p>
          <p><AiOutlinePhone /> (92) 99130-1888</p>
        </div> 
      </address>
    </div>
  );
};