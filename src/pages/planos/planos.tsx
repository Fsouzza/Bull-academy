import styles from './Planos.module.scss';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import mouse from 'assets/img/icon/mouse-alt.svg';
import crown from 'assets/img/icon/crown.svg';
import diamond from 'assets/img/icon/diamond.svg';

export const Planos = () =>{
  return(
    <>
      <div className={styles.planos}>
        <h2 className={styles.planos__subtitle}>Pricing</h2>
        <div className={styles.planos__title}>
          <span className='stroke-text'>Choose</span>
          <span>Our Special Plan</span>
        </div>
      </div>

      <div className={styles.cards}>
        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <img className={styles.cards__imagens} src={mouse} alt='' />
            </div>
            <h3 className={styles.cards__title}>Basic Packcage</h3>
            <span className={styles.cards__number}>R$ 200</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              05 Days in a week
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              01 Sweatshirt
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              01 Bottle of protein
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              Acsess to video
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              Muscle stretching
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
            Purchase
            <AiOutlineArrowRight />
          </Link>
        </article>

        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <img className={styles.cards__imagens} src={crown} alt='' />
            </div>
            <h3 className={styles.cards__title}>Premiun Packcage</h3>
            <span className={styles.cards__number}>R$ 240</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                05 Days in a week
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                01 Sweatshirt
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                01 Bottle of protein
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Acsess to video
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Muscle stretching
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
              Purchase
            <AiOutlineArrowRight />
          </Link>
        </article>

        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <img className={styles.cards__imagens} src={diamond} alt='' />
            </div>
            <h3 className={styles.cards__title}>Elite Packcage</h3>
            <span className={styles.cards__number}>R$ 420</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                05 Days in a week
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                01 Sweatshirt
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                01 Bottle of protein
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Acsess to video
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Muscle stretching
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
              Purchase
            <AiOutlineArrowRight />
          </Link>
        </article>
      </div>
  
    </>
  );
};