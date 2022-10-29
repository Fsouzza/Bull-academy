import { useState } from 'react';
import styles from './Aulas.module.scss';
import { Buscador } from '../aulasFree/buscador';
import { Filtros } from '../aulasFree/filtros';
import { Ordenador } from '../aulasFree/ordenador';
import { Videos } from './videos';

export const AulasExclusivas = () =>{
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return(
    <section className={styles.aula}>
      <h3 className={styles.aula__titulo}>
        <span className='stroke-text'>Exercícios</span>
         Diamante
      </h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.aula__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Videos busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};