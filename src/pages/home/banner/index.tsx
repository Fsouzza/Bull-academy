import styles from './Banner.module.scss';
import heart from 'assets/img/icon/heart.svg';
import frontImg from 'assets/img/front.png';
import background from 'assets/img/background.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { CgGym } from 'react-icons/cg';
import { BiRun } from 'react-icons/bi';
import { GiGymBag } from 'react-icons/gi';

export const Banner = () => {

  return(
    <div className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__left__ad}>
          <div></div>
          <span>A melhor academia de toda a cidade</span>
        </div>

        <div className={styles.header__left__text}>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Seu</span>
          </div>
          <div>
            <span>Corpo Online</span>
          </div>
          <div className={styles.header__left__description}>
            <span>
              Aqui vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo
            </span>
          </div>
        </div>

        <div className={styles.header__left__figures}>
          <div>
            <span>
              <GiGymBag color='#5408FF' />
              <CountUp 
                start={0}
                end={50}
                duration={1.4}
                prefix="+"
              />
            </span>
            <p>Personal trainers</p>
          </div>
          <div>
            <span>
              <BiRun color='#5408FF' />
              <CountUp 
                start={10}
                end={999}
                duration={1.4}
                prefix="+"
              />
            </span>
            <p>Membros cadastrados</p>
          </div>
          <div>
            <span>
              <CgGym color='#5408FF' />
              <CountUp 
                start={0}
                end={100}
                duration={1.4}
                prefix="+"
              />
            </span>
            <p>Exercicios diferentes</p>
          </div>  
        </div>

        <div className={styles.header__left__buttons}>
          <Link className={styles.header__left__btn} to='/treinos'>Iniciar</Link>
          <Link className={styles.header__left__btn} to='/planos'>Assinatura</Link>
        </div>
      </div>

      <div className={styles.header__right}>
        <div className={styles.header__right__heartRate}>
          <img className={styles.header__right__img} src={heart} alt='' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={frontImg} alt='' className={styles.header__right__frontimage} />
        <img src={background} alt='' className={styles.header__right__back} />
      </div>
    </div>
  );
};