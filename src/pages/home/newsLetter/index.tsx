import styles from './Newsletter.module.scss';

export const NewsLetter = () =>{
  return(
    <section className={styles.newsletter}>
      <div className={styles.newEsquerda}>
        <img />
      </div>
      <div className={styles.newMeio}>
        <p>Do you want access to <span>exclusive</span> promotions?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, deleniti rem? Earum excepturi omnis velit modi. Necessitatibus, officiis doloremque similique excepturi quis tenetur ipsa eos placeat vitae perspiciatis? Quibusdam, blanditiis.</p>
      </div>
      <div className={styles.newDireita}>
        <input placeholder='Your Email'></input>
        <button>Send</button>
      </div>
    </section>
  );
};