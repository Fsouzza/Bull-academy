import styles from './Video.module.scss';
import { FiPlayCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { TagsVideo } from 'components/TagsVideo';
import { Player } from 'types/videos';

const Video = (props: Player) =>{
  const { id, thumb, title, description} = props;
  const navigate = useNavigate();

  return(
    <div className={styles.video} onClick={() => navigate(`/video/${id}`)}>
      <div className={styles.video__imagem}>
        <img src={thumb} alt={title}/>
        <div className={styles.video__play}>
          <FiPlayCircle size={80} />
        </div>
      </div>
      <div className={styles.video__descricao}>
        <h2>{title}</h2>
        <p>{description}</p>
        <TagsVideo {...props} />
      </div>  
    </div>
  );
};

export default Video;