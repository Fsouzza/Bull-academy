import { useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from 'components/botao';
import {
  validateEmail,
  validateNome,
  validatePassword,
} from '../../utils/regex';
import styles from './register.module.scss';
import styles2 from 'pages/login/login.module.scss';
import logo from '../../assets/img/foxLogo.png';

export const Register = () => {
  const [{ name, email, password, repeatPassword }, setRegisterData] = useState(
    {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    }
  );

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validate = () => {
    if (!validateEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!validatePassword.test(password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    if (!validateNome.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  };

  return (
    <div className={styles2.container}>
      <div className={styles2.container__login}>
        <div className={styles2.container__wrap}>
          <form action="" className={styles2.form}>
            <span className={styles2.form__title}>
              <img src={logo} alt="logo da empresa" />
            </span>
            <span className={styles2.form__title}>Sign Up</span>

            <div className={styles.formInputs}>
              <label htmlFor="name">Nome completo:</label>
              <input
                className={
                  nameErr === true
                    ? `${styles.inputs__error} ${styles.inputs}`
                    : `${styles.inputs}`
                }
                name="name"
                type="text"
                value={name}
                onChange={(e) =>
                  setRegisterData({
                    name: e.target.value,
                    email,
                    password,
                    repeatPassword,
                  })
                }
                required
              />
              {nameErr && (
                <span className={styles.erroRegex}>
                  Digite seu Nome e Sobrenome
                </span>
              )}
            </div>

            <div className={styles.formInputs}>
              <label htmlFor="email">E-mail:</label>
              <input
                className={
                  emailErr === true
                    ? `${styles.inputs__error} ${styles.inputs}`
                    : `${styles.inputs}`
                }
                name="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setRegisterData({
                    name,
                    email: e.target.value,
                    password,
                    repeatPassword,
                  })
                }
                required
              />
              {emailErr && (
                <span className={styles.erroRegex}>
                  Digite um e-mail válido
                </span>
              )}
            </div>

            <div className={styles.formInputs}>
              <label htmlFor="password">Senha:</label>
              <input
                className={
                  passwordErr === true
                    ? `${styles.inputs__error} ${styles.inputs}`
                    : `${styles.inputs}`
                }
                name="password"
                type="password"
                value={password}
                onChange={(e) =>
                  setRegisterData({
                    name,
                    email,
                    password: e.target.value,
                    repeatPassword,
                  })
                }
                required
              />
              {passwordErr && (
                <span className={styles.erroRegex}>
                  Senha deve conter ao menos uma letra maiúscula e caractere
                  especial
                </span>
              )}
            </div>

            <div className={styles2.containerLogin__btn}>
              <Botao onClick={validate}>Cadastrar</Botao>
            </div>

            <div className={styles2.text__center}>
              <span className={styles2.txt__1}>
                Já possui possui um cadastro?
              </span>
              <Link className={styles2.txt__2} to="/login">
                Acesse.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
