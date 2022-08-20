import styles from './Planos.module.scss';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {IoDiamond} from 'react-icons/io5';
import { FaCrown, FaMouse } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Planos = () =>{
  return(
    <section>
      <div className={styles.planos}>
        <h2 className={styles.planos__subtitle}>Planos</h2>
        <div className={styles.planos__title}>
          <span className='stroke-text'>Escolha</span>
          <span>Nossos pacotes</span>
        </div>
      </div>

      <div className={styles.cards}>
        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <FaMouse size={35} color={'#c0c0c0'} />
            </div>
            <h3 className={styles.cards__title}>Pacote Básico</h3>
            <span className={styles.cards__number}>R$ 150</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              02 aulas por semana
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              01 kit de roupa
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              01 Garrafa de Proteína
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              Acessos aos videos
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
              Guia de alongamento
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
              Assinar
            <div>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </article>

        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <FaCrown size={35} color={'#c0c0c0'} />
            </div>
            <h3 className={styles.cards__title}>Pacote Elite</h3>
            <span className={styles.cards__number}>R$ 220</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                03 aulas por semana
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                01 kit + Garrafa
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                01 Suplemento Whey
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                Acesso aos videos
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#0CF25D' />
                Aulas Exclusivas
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
              Assinar
            <div>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </article>

        <article className={styles.cards__card}>
          <div className={styles.cards__header}>
            <div className={styles.cards__shape}>
              <IoDiamond size={35} color={'#c0c0c0'} />
            </div>
            <h3 className={styles.cards__title}>Pacote Diamante</h3>
            <span className={styles.cards__number}>R$ 420</span>
          </div>

          <ul className={styles.cards__list}>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                05 Aulas por semana
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                01 kit musculação
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Acesso aulas premium
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Treinos online
            </li>
            <li className={styles.cards__item}>
              <MdOutlineCheckCircle color='#038C3E' />
                Acompanhamento nutricional
            </li>
          </ul>

          <Link to='/register' className={styles.cards__button}>
              Assinar
            <div>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </article>
      </div>
  
    </section>
  );
};