import SelectButton from './SelectButton';
import styles from './selectGroup.module.scss';

const SelectGroup = ({ options, value, onChange }) => {
    return (
        <div className={styles.group}>
            {options.map((option) => (
                <SelectButton
                    icon={option.icon}
                    value={option.value}
                    isSelected={value === option.value}
                    onChange={() => onChange(option.value)}>
                    {option.label}
                </SelectButton>
            ))}
        </div>
    );
};

export default SelectGroup;
