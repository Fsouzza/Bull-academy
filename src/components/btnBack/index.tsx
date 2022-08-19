import styles from './Btnback.module.scss';
import {useNavigate} from 'react-router-dom';

export const BotaoVoltar = () =>{
  const navigate = useNavigate();

  return(
    <button className={styles.botao}
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
};