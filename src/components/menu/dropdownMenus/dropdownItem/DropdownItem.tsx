import styles from '../dropdownPerfil/DropdownPerfil.module.scss';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode
  text: string
}

export const DropdownItem = (props: Props ) => {
  return(
    <li className={styles.profileMenu__item}>
      <button>{props.icon} {props.text}</button>
    </li>
  );
};