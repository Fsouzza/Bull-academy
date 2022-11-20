import styles from './Mostpopular.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {FaPlay, FaPlus} from 'react-icons/fa';
import { Link, useNavigate} from 'react-router-dom';
import { Player } from 'types/videos';
import videos from 'data/videos.json';

export const Recomendados = ()=>{
  let videosRecomendados = [...videos];
  videosRecomendados = videosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,4);
  const navigate = useNavigate();

  function RedirecionarParaAssistir(player: Player){
    navigate(`/video/${player.id}`, {state: {videos}, replace: true});
  }

  return(
    <section>
      <div className={styles.populares}>
        <h2 className={styles.populares__subtitulo}>
          Mais populares
        </h2>
        <div className={styles.populares__titulo}>
          <span className='stroke-text'>Videos</span>
          <span>Recomendados</span>
        </div>
      </div>

      <Swiper loop={true} pagination={{dynamicBullets: true,}} modules={[Pagination]} className={'mySwiper'}>
        {videosRecomendados.map(item => (
          <SwiperSlide key={item.id} className='swiper'>
            <img className={styles.imagens} src={item.thumb} alt={item.title}/>
            <h4 className={styles.tituloVideo}>
              {item.title}
            </h4>
            <div className={styles.botoes}>
              <button className={styles.botoes__botao} onClick={()=> RedirecionarParaAssistir(item)}>
                <FaPlay />
                Assista Agora
              </button>
              <Link to='/treinos' className={styles.botoes__botao}>
                <FaPlus />
                Ver Mais
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};