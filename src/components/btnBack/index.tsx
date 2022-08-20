import styles from './Btnback.module.scss';
import {useNavigate} from 'react-router-dom';

export const BotaoVoltar = () =>{
  const navigate = useNavigate();

  return(
    <button className={styles.button}
      onClick={() => navigate(-1)}
    >
      Voltar
    </button>
  );
};