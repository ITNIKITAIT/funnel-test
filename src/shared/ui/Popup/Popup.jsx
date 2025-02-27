import { createPortal } from 'react-dom';
import styles from './popup.module.scss';

const Popup = ({ children }) => {
    return createPortal(
        <div className={styles.popup}>{children}</div>,
        document.body
    );
};

export default Popup;
