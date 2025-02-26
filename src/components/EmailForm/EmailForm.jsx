import Input from '../../shared/ui/Input/Input';
import styles from './emailForm.module.scss';

import infoIcon from '../../assets/icons/information.svg';

const EmailForm = ({ email, setEmail, setIsEmailValid }) => {
    return (
        <div className={styles.form}>
            <h2 className={styles.form__title}>Enter your email</h2>
            <p className={styles.form__subtitle}>
                To get access to the profiles
            </p>
            <Input
                setIsEmailValid={setIsEmailValid}
                placeholder="Enter your email"
                value={email}
                setValue={setEmail}
            />
            <div className={styles.form__warn}>
                <img src={infoIcon} alt="info" />
                <p>
                    This information will be used for the registration process
                    only and won't be visible to other users.
                </p>
            </div>
        </div>
    );
};

export default EmailForm;
