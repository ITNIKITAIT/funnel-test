import styles from './button.module.scss';

const Button = ({ children, onClick, isDisabled }) => {
    return (
        <button disabled={isDisabled} onClick={onClick} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;
