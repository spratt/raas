import icon from '../../../assets/icon.svg';
import styles from './Issues.module.css';

/*
 * Since github doesn't allow iframe embedding, this has been
 * de-scoped.  Future developers might be able to fix this with an
 * electron BrowserView.  See:
 * https://www.electronjs.org/docs/latest/tutorial/web-embeds
 */

export default function Issues({ marginLeft = 0 }) {
  return (
    <iframe src="https://github.com/spratt/raas/issues" style={{ width: "100%", height: "100%", marginLeft }} />
  );
}
