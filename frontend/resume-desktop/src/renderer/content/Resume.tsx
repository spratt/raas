import icon from '../../../assets/icon.svg';
import styles from './Resume.module.css';

function Header({ marginLeft = 0, children }) {
  return (
    <div className={styles.header}>
      <button className={styles.backButton}>
        &lt; { children || "Back" }
      </button>
    </div>
  );
}

export default function Resume({ marginLeft = 0, src, prev = "" }) {
  return (
    <div className={styles.wrapper} style={{ marginLeft }}>
      <Header>{ prev }</Header>
      <iframe
        className={styles.resume}
        src={src}
        frameborder="0"
      ></iframe>
    </div>
  );
}
