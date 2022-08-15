import styles from './Home.module.scss';
import heart from 'assets/img/icon/heart.svg';
import frontImg from 'assets/img/front.png';
import background from 'assets/img/background.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { CgGym } from 'react-icons/cg';
import { BiRun } from 'react-icons/bi';
import { GiGymBag } from 'react-icons/gi';

export const Home = () => {

  return(
    <div className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__left__ad}>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        <div className={styles.header__left__text}>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className={styles.header__left__description}>
            <span>
              In here we will help you to shape and build your idel body and live up your life to fullest
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
            <p>Expert Coaches</p>
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
            <p>Members joined</p>
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
            <p>Fitness programs</p>
          </div>  
        </div>

        <div className={styles.header__left__buttons}>
          <Link className={styles.header__left__btn} to='/exercicios'>Get Started</Link>
          <Link className={styles.header__left__btn} to='/planos'>To sign</Link>
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