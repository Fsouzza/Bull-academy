import {  Exclusivos } from 'types/videos';
import { useEffect, useState } from 'react';
import { Video } from '../../aulasFree/videos/video';
import styles from './Videos.module.scss';
import http from './../../../http/index';

interface Props {
  busca: string,
  filtro: number | string | null,
  ordenador: string
}

export const Videos = (props: Props) => {
  const [exclusivos, setExclusivos] = useState<Exclusivos[]>([]);
  const {busca, filtro, ordenador} = props;

  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Exclusivos[]){
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
    http.get<Exclusivos[]>('exclusivos')
      .then(resposta => setExclusivos(ordenar(resposta.data.filter(item => testaBusca(item.title) && testaFiltro(item.category.id)))))
      .catch((erro) => console.log(erro));
  }, [busca, filtro, ordenador]);

  return(
    <div className={styles.videos}>
      {exclusivos.map(item => (
        <Video 
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};