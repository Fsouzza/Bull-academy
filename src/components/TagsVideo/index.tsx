import { Player } from 'types/videos';
import styles from './Tagsvideo.module.scss';

export const TagsVideo = ({
  category,
  canal,
  time,
  price
}: Player) =>{
  return(
    <div className={styles.tags}>
      <div className={styles.tags__categoria}>
        {category.label}
      </div>
      <div className={styles.tags__canal}>
        {canal}
      </div>
      <div className={styles.tags__tempo}>
        {time} minutos
      </div>
      <div className={styles.tags__valor}>
        {price}
      </div>
    </div>
  );
};