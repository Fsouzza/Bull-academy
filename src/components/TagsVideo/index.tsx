import { Player } from 'types/videos';
import styles from './Tagsvideo.module.scss';

export const TagsVideo = ({ category, canal, time, price}: Player) =>{
  return(
    <div className={styles.tags}>
      <div className={styles.tags__category}>
        {category.label}
      </div>
      <div className={styles.tags__chanel}>
        {canal}
      </div>
      <div className={styles.tags__time}>
        {time} min.
      </div>
      <div className={price === 'Free' ? `${styles.tags__price}` : `${styles.tags__diamond}`}>
        {price}
      </div>
    </div>
  );
};