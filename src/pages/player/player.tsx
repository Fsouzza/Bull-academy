import styles from './Player.module.scss';
import { useParams, Routes, Route } from 'react-router-dom';
import videos from 'data/videos.json';
import { NotFound } from 'pages/notFound/notFound';
import { PagePadrao } from 'components/pagePadrao';
import ReactPlayer from 'react-player';
import { BotaoVoltar } from 'components/btnBack';
import { TagsVideo } from 'components/TagsVideo';

export const Player = () =>{
  const {id} = useParams();
  const player = videos.find(item => item.id === Number(id));

  if(!player){
    return <NotFound />;
  }

  return(
    <Routes>
      <Route path='*' element={<PagePadrao />}>
        <Route index element={
          <section className={styles.videoAula}>
            <div className={styles.videoAula__btnBack}>
              <BotaoVoltar />
            </div>
            <h2 className={styles.videoAula__titulo}>
              <span className='stroke-text'>Lição</span>
              <span>de hoje</span>
            </h2>
            <div className={styles.player}>
              <ReactPlayer url={player.video} controls={true} width={900} height={500} />
            </div>
            <div className={styles.player__mobile}>
              <ReactPlayer url={player.video} controls={true} width={370} height={350} />
            </div>
            <div className={styles.videoAula__subtitulo}>
              <h3>{player.title}</h3>
            </div>
            <div className={styles.videoAula__descricao}>
              <p className=''>{player.description}</p>
            </div>
            <TagsVideo {...player} />
          </section>
        } 
        />
      </Route>
    </Routes>
  );
};