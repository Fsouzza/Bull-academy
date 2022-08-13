import { useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from 'components/botao';
import styles from './login.module.scss';
import logo from '../../assets/img/foxLogo.png';
import { TelaLogin } from 'components/telaLogin';

export const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TelaLogin>
      <div className={styles.container}>
        <div className={styles.container__login}>
          <div className={styles.container__wrap}>
            <form action="" className={styles.form}>
              <span className={styles.form__title}>
                <img src={logo} alt="logo da empresa" />
              </span>

              <span className={styles.form__title}>Sign In</span>

              <div className={styles.input__wrap}>
                <input
                  className={
                    email !== ''
                      ? `${styles.hasVal} ${styles.input}`
                      : `${styles.input}`
                  }
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span
                  className={styles.input__focus}
                  data-placeholder="Email"
                ></span>
              </div>

              <div className={`${styles.input__wrap} ${styles.input__wrap2}`}>
                <input
                  className={
                    password !== ''
                      ? `${styles.hasVal} ${styles.input}`
                      : `${styles.input}`
                  }
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className={styles.input__focus}
                  data-placeholder="Password"
                ></span>
              </div>

              <div className={styles.forgot}>
                <Link className={styles.txt__3} to="">
                  Esqueceu sua senha?
                </Link>
              </div>

              <div className={styles.containerLogin__btn}>
                <Botao>Login</Botao>
              </div>

              <div className={styles.text__center}>
                <span className={styles.txt__1}>Não possui conta?</span>
                <Link className={styles.txt__2} to="/register">
                  Criar conta.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </TelaLogin>
  );
};