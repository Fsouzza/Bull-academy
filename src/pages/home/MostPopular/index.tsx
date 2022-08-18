import videos from 'data/videos.json';
import styles from './Mostpopular.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {FaPlay, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Recomendados = ()=>{
  let videosRecomendados = [...videos];
  videosRecomendados = videosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3);

  return(
    <section>
      <div className={styles.populares}>
        <h2 className={styles.populares__subtitulo}>
          Most Popular
        </h2>
        <div className={styles.populares__titulo}>
          <span className='stroke-text'>recommended</span>
          <span>videos</span>
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
              <Link to='' className={styles.botoes__botao}>
                <FaPlay />
                Watch Now
              </Link>
              <Link to='/treinos' className={styles.botoes__botao}>
                <FaPlus />
                See More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};