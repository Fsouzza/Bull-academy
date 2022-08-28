import styles from './Testemunial.module.scss';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import testemunial from './testemunial.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';

export const Testemunials = () =>{
  
  return(
    <section className={styles.testemunho}>
      <div className={styles.testemunho__titulo}>
        <span className='stroke-text'>Feed</span>
        <span>Back</span>
      </div>
      <Swiper slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        pagination={{ clickable: true,}}
        modules={[Scrollbar]}
        className={styles.testemunho__cards}
      >
        {testemunial.map((item) => (
          <SwiperSlide key={item.id} className={styles.testemunho__card}>
            <BsChatRightQuoteFill size={40} />
            <p>{item.testemunial}</p>
            <div className={styles.testemunho__conteudo}>
              <img src={item.image} />
              <div className={styles.testemunho__identificacao}>
                <h5>{item.nome}</h5>
                <span>{item.cargo}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};