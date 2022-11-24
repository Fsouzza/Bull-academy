import React, { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { FaSearch } from 'react-icons/fa';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({busca, setBusca}: Props) =>{
  const searchIcon = useMemo(() => <FaSearch size={30} color='#5122c0'/>, []);
  return(
    <div className={styles.search}>
      <input 
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder='Pesquisar'
      />
      {searchIcon}
    </div>
  );
};

export default memo(Buscador);