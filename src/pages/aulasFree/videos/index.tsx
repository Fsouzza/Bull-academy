import videos from 'data/videos.json';
import { memo, useEffect, useState } from 'react';
import Video from 'components/Videos/video/video';
import styles from './Videos.module.scss';
import { ordenar, testaBusca, testaFiltro } from 'helpers/buscadores';
import { iBuscadores } from 'types/buscadores';

export const Videos = ({busca, filtro, ordenador}: iBuscadores) => {
  const [lista, setLista] = useState(videos);

  useEffect(()=> {
    const novaLista = videos.filter(item => testaBusca(item.title, busca) && testaFiltro(item.category.id, filtro));
    setLista(ordenar(novaLista, ordenador));
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