import icon from '../../../assets/icon.svg';
import styles from './Resume.module.css';

const prevStrings = {
  local: 'Back to Local Resumes',
  hub: 'Back to Resume Hub',
};

function Header({ marginLeft = 0, onClick, children }) {
  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={onClick}>
        &lt; {children || 'Back'}
      </button>
    </div>
  );
}

export default function Resume({
  marginLeft = 0,
  src,
  prev = '',
  setSelected,
}) {
  return (
    <div className={styles.wrapper} style={{ marginLeft }}>
      <Header onClick={() => setSelected(prev)}>{prevStrings[prev]}</Header>
      <iframe className={styles.resume} src={src} frameBorder="0"></iframe>
    </div>
  );
}
