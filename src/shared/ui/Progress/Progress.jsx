import styles from './progress.module.scss';
import arrow from '../../../assets/icons/arrow.svg';

const Progress = ({ value, prevStep, nextStep, isActiveNextStep }) => {
    return (
        <div className={styles.progress}>
            <img alt="arrow-left" onClick={prevStep} src={arrow} />
            <div className={styles.progress__bar}>
                <div
                    style={{ width: `${value}%` }}
                    className={styles.progress__current}></div>
            </div>
            {isActiveNextStep && (
                <img
                    style={{ transform: 'rotate(180deg)' }}
                    alt="arrow-right"
                    onClick={nextStep}
                    src={arrow}
                />
            )}
        </div>
    );
};

export default Progress;
