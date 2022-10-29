import { BiBell } from 'react-icons/bi';
import styles2 from '../../Menu.module.scss';


export const DropdownNotification = () => {
  return(
    <li>
      <button className={styles2.login__link}><BiBell /></button>
    </li>
  );
};