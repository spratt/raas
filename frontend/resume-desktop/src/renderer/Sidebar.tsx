import icon from '../../assets/icon.svg';
import styles from './Sidebar.module.css';

function Item({ name, selected = false }) {
  return (
    <div className={styles.itemWrapper}>
      <button className={`${styles.item} ${selected && styles.selected}`}>
        { name }
      </button>
    </div>
  );
}

export default function Sidebar({ width = 255 }) {
  return (
    <div style={{ width }} className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} alt="icon" src={icon} />
        Resume Desktop
      </div>
      <Item name="Local" selected={true} />
      <Item name="Remote" />
      <Item name="About" />
    </div>
  );
}
