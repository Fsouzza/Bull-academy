import videos from 'data/videos.json';
import { Aula } from 'types/videos';
import { memo, useEffect, useState } from 'react';
import { Video } from './video';
import styles from './Videos.module.scss';

interface Props {
  busca: string,
  filtro: number | string | null,
  ordenador: string
}

export const Videos = (props: Props) => {
  const [lista, setLista] = useState(videos);
  const {busca, filtro, ordenador} = props;

  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Aula){
    switch(ordenador){
    case 'titulo': 
      return novaLista.sort((a, b) => a.title > b.title ? 1 : -1);
  
    case 'tempo': 
      return novaLista.sort((a, b) => a.time > b.time ? 1 : -1);

    case 'canal': 
      return novaLista.sort((a, b) => a.canal > b.canal ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(()=> {
    const novaLista = videos.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return(
    <div className={styles.videos}>
      {lista.map(item => (
        <Video 
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default memo(Videos);