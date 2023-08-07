import icon from '../../../assets/icon.svg';
import styles from './Resume.module.css';

export default function Resume({ marginLeft = 0, src }) {
  return (
    <div className={styles.wrapper} style={{ marginLeft }}>
      <iframe
        className={styles.resume}
        src="https://docs.google.com/document/d/e/2PACX-1vSJDLv_SUMCkkgJQUzInuSbnS0ubzOEu2hsVzIQOYyFf06R2d5WOykWH41GGb91cneVYhLzIxX3Ss6I/pub?embedded=true"
        frameborder="0"
      ></iframe>
    </div>
  );
}
