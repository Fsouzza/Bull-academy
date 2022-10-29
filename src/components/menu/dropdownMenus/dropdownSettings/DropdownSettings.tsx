import { AiOutlineSetting } from 'react-icons/ai';
import styles2 from '../../Menu.module.scss';

export const DropdownSettings = () => {
  return(
    <li>
      <button className={styles2.login__link}><AiOutlineSetting /></button>
    </li>
  );
};