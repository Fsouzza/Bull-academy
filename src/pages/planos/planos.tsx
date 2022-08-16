import styles from './Planos.module.scss';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {IoDiamond} from 'react-icons/io5';
import { FaCrown, FaMouse } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
              <FaMouse size={35} color={'#c0c0c0'} />
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
              <FaCrown size={35} color={'#c0c0c0'} />
            </div>
            <h3 className={styles.cards__title}>Premiun Packcage</h3>
            <span className={styles.cards__number}>R$ 240</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                05 Days in a week
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                01 Sweatshirt
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                01 Bottle of protein
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                Acsess to video
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
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
              <IoDiamond size={35} color={'#c0c0c0'} />
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