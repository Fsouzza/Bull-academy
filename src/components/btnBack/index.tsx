import styles from './Btnback.module.scss';
import {useNavigate} from 'react-router-dom';
import {IoArrowBackCircleOutline} from 'react-icons/io5';

export const BotaoVoltar = () =>{
  const navigate = useNavigate();

  return(
    <button className={styles.button}
      onClick={() => navigate(-1)}
    >
      <IoArrowBackCircleOutline size={40} />
    </button>
  );
};