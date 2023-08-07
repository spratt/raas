import icon from '../../assets/icon.svg';
import styles from './Sidebar.module.css';

function Header() {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logo} alt="icon" src={icon} />
      Resume Desktop
    </div>
  );
}

function Button({ children, selected = false }) {
  return (
    <div className={styles.buttonWrapper}>
      <button className={`${styles.button} ${selected && styles.selected}`}>
        { children }
      </button>
    </div>
  );
}

function Footer({ width = 255 }) {
  return (
    <div style={{ width }} className={styles.footer}>
      <Button>Issues</Button>
    </div>
  );
}

export default function Sidebar({ width = 255 }) {
  return (
    <div style={{ width }} className={styles.sidebar}>
      <Header />
      <Button selected={true}>Local Resumes</Button>
      <Button>Resume Hub</Button>
      <Button>About</Button>
      <Footer width={width} />
    </div>
  );
}
