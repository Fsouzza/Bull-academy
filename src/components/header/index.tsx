import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import heart from 'assets/img/icon/heart.svg';
import frontImg from 'assets/img/front.png';
import back from 'assets/img/back.png';

export const Header = () => {
  return(
    <header className={styles.header}>
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
            <span>+50</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+1K</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+60</span>
            <span>Fitness programs</span>
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
        <img src={back} alt='' className={styles.header__right__back} />
        <div className={styles.header__right__backimage} />
      </div>
    </header>
  );
};