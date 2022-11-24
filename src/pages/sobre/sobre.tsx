import styles from './Sobre.module.scss';
import foto from 'assets/img/personalT.jpg';
import logo from 'assets/img/foxLogo.png';
import {FaRegBuilding, FaAward, FaNetworkWired} from 'react-icons/fa';
import { Testemunials } from './testemunionals';
import { Adress } from './endereco';


const Sobre = () =>{
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
      <Testemunials />
      <Adress />
    </section>
    
  );
};

export default Sobre;