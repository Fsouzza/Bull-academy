import React from 'react';
import styles from './Buscador.module.scss';
import { FaSearch } from 'react-icons/fa';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export const Buscador = ({busca, setBusca}: Props) =>{
  return(
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder='Pesquisar'
      />
      <FaSearch size={30} color='#5122c0'/>
    </div>
  );
};