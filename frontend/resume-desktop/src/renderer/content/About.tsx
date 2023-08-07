import icon from '../../../assets/icon.svg';
import styles from './About.module.css';

export default function About({ marginLeft = 0 }) {
  return (
    <div style={{ marginLeft }} className={styles.wrapper}>
      <div className={styles.centred}>
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Resume Desktop</h1>
      <div className={styles.centred}>
        An app for managing resumes and downloading resumes from a cloud service
        called Resume Hub.
      </div>
    </div>
  );
}
