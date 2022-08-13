import { ReactElement } from 'react';
import styles from './TelaLogin.module.scss';


export const TelaLogin = ({children}: {children: ReactElement}) => {
  return(
    <div className={styles.container}>
      <div className={styles.container__login}>
        <div className={styles.container__wrap}>
          {children}
        </div>
      </div>
    </div>
  );
};