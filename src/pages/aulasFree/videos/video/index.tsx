import styles from './Video.module.scss';
import videos from 'data/videos.json';
import {FiPlayCircle} from 'react-icons/fi';

type Props = typeof videos[0];

export const Video = (props: Props) =>{
  const { thumb, title, description, category, canal ,time, price} = props;

  return(
    <div className={styles.video}>
      <div className={styles.video__imagem}>
        <img src={thumb} alt={title}/>
        <div className={styles.video__play}>
          <FiPlayCircle size={80} />
        </div>
      </div>
      <div className={styles.video__descricao}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.video__tags}>
          <div className={styles.video__categoria}>
            {category.label}
          </div>
          <div className={styles.video__canal}>
            {canal}
          </div>
          <div className={styles.video__tempo}>
            {time} minutos
          </div>
          <div className={styles.video__valor}>
            {price}
          </div>
        </div>
      </div>  
    </div>
  );
};