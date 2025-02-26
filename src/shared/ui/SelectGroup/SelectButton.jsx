import styles from './selectGroup.module.scss';

const SelectButton = ({ value, children, onChange, isSelected, icon }) => {
    return (
        <button
            key={value}
            className={`${styles['select-btn']} ${
                isSelected && styles['select-btn-selected']
            }`}
            style={{ borderRadius: icon ? '12px' : '100px' }}
            onClick={onChange}>
            {icon && <p className={styles['select-btn__icon']}>{icon}</p>}
            {children}
        </button>
    );
};

export default SelectButton;
