import SelectGroup from '../../shared/ui/SelectGroup/SelectGroup';
import styles from './question.module.scss';

const Question = ({ question, value, onChange }) => {
    return (
        <div className={styles.question}>
            <p className={styles.question__title}>{question}</p>
            <SelectGroup
                options={[
                    { value: false, label: 'No', icon: '❌' },
                    { value: true, label: 'Yes', icon: '✅' },
                ]}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Question;
