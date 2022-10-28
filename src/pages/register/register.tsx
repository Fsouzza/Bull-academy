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
import { TelaLogin } from 'components/telaLogin';
import http from './../../http/index';

export const Register = () => {
  const [{ nome, email, senha, endereco, cep, complemento }, setRegisterData] = useState(
    {
      nome: '',
      email: '',
      senha: '',
      endereco: '',
      cep: '',
      complemento: '',
    }
  );
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const validate = () => {
    if (!validateEmail.test(email) && !validatePassword.test(senha) && !validateNome.test(nome)) {
      setEmailErr(true);
      setPasswordErr(true);
      setNameErr(true);
    } else {
      setEmailErr(false);
      setPasswordErr(false);
      setNameErr(false);
    }
  };
  const aoSubmUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    const usuario = {
      nome,
      email,
      senha,
      endereco,
      cep,
      complemento
    };

    http.post('public/registrar', usuario)
      .then(() => {
        alert('Usuário foi cadastrado com sucesso');
        setRegisterData({
          nome: '',
          email: '',
          senha: '',
          endereco: '',
          cep: '',
          complemento: '',
        });
      })
      .catch(() => {
        alert('OPS! Houve algum erro...');
      });
  };

  return (
    <TelaLogin>
      <form action="" onSubmit={aoSubmUser} className={styles2.form}>
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
            value={nome}
            onChange={(e) =>
              setRegisterData({
                nome: e.target.value,
                email,
                senha,
                endereco,
                cep,
                complemento
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
                nome,
                email: e.target.value,
                senha,
                endereco,
                cep,
                complemento
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
            value={senha}
            onChange={(e) =>
              setRegisterData({
                nome,
                email,
                senha: e.target.value,
                endereco,
                cep,
                complemento
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
          <Botao onClick={validate}>Cadastrar </Botao>
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
    </TelaLogin>
          
  );
};