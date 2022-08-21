import styles from './Sobre.module.scss';
import foto from 'assets/img/personalT.jpg';
import logo from 'assets/img/foxLogo.png';
import {FaRegBuilding, FaAward, FaNetworkWired} from 'react-icons/fa';
import {BiMap} from 'react-icons/bi';
import {AiOutlineGlobal, AiOutlinePhone} from 'react-icons/ai';

export const Sobre = () =>{
  return(
    <section>
      <h2 className={styles.titulo}>
        <span className='stroke-text'>Sobre</span>
        <span>Nossa Empresa</span>
      </h2>

      <div className={styles.empresaCard}>
        <div className={styles.empresaCard__conteudo}>
          <span>Bull Fit</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at aut nihil neque aliquid cum nisi explicabo itaque earum? Voluptates.
          </p>
        </div>
        <img className={styles.empresaCard__imagem} src={foto} alt='Foto dos funcionários' />
      </div>

      <div className={styles.historiaCard}>
        <img className={styles.historiaCard__logo} src={logo} alt='Logo da academia Bull' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur error ullam illum enim, beatae voluptatum, suscipit accusamus quod sunt voluptas labore, culpa odit! Animi ipsum illum, 
          doloremque necessitatibus quam deleniti. Tenetur error ullam illum enim, beatae voluptatum.
        </p>
      </div>
      <div className={styles.resumoCard}>
        <article className={styles.resumoCard__quadro}>
          <FaRegBuilding size={40} color='#5408FF' />
          <span>+05</span>
          <p>Anos de Mercado</p>
        </article>
        <article className={styles.resumoCard__quadro}>
          <FaAward size={40} color='#9704C2' />
          <span>+15</span>
          <p>Prêmios Recebidos</p>
        </article>
        <article className={styles.resumoCard__quadro}>
          <FaNetworkWired size={40} color='#038C3E' />
          <span>+200k</span>
          <p>Em acessos.</p>
        </article>
      </div>

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
    </section>
  );
};