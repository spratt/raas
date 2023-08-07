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

function Button({ children, option, contentState: { contentOptions, selected, setSelected } }) {
  const isSelected = selected === option;
  
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={() => setSelected(option)} className={`${styles.button} ${isSelected && styles.selected}`}>
        { children }
      </button>
    </div>
  );
}

function Footer({ width = 255, children }) {
  return (
    <div style={{ width }} className={styles.footer}>
      {children}
    </div>
  );
}

export default function Sidebar({ width = 255, contentState }) {
  const { contentOptions } = contentState;

  return (
    <div style={{ width }} className={styles.sidebar}>
      <Header />
      <Button option={contentOptions.local} contentState={contentState}>Local Resumes</Button>
      <Button option={contentOptions.hub} contentState={contentState}>Resume Hub</Button>
      <Button option={contentOptions.about} contentState={contentState}>About</Button>
      <Footer width={width}>
        { /* Do we have anything to put here? */ }
      </Footer>
    </div>
  );
}
