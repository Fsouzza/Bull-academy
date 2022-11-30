import {  Exclusivos } from 'types/videos';
import { useEffect, useState } from 'react';
import Video from 'components/Videos/video/video';
import styles from './Videos.module.scss';
import http from 'http/index';
import { iBuscadores } from 'types/buscadores';
import { testaBusca, testaFiltro } from 'helpers/buscadores';

const Videos = ({busca, filtro, ordenador}: iBuscadores) => {
  const [exclusivos, setExclusivos] = useState<Exclusivos[]>([]);

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
      .then(resposta => setExclusivos(ordenar(resposta.data.filter(item => testaBusca(item.title, busca) && testaFiltro(item.category.id, filtro)))))
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

export default Videos;