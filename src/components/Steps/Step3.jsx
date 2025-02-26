import Progress from '../../shared/ui/Progress/Progress';
import Button from '../../shared/ui/Button/Button';
import styles from './step.module.scss';
import EmailForm from '../EmailForm/EmailForm';
import { useState } from 'react';

const Step3 = ({ nextStep, prevStep, email, setEmail }) => {
    const [isEmailValid, setIsEmailValid] = useState(false);

    return (
        <section className={styles.step}>
            <div>
                <Progress
                    IsActiveNextStep={null}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    value={66}
                />
                <EmailForm
                    setIsEmailValid={setIsEmailValid}
                    email={email}
                    setEmail={setEmail}
                />
                <Button isDisabled={!isEmailValid}>Continue</Button>
            </div>
        </section>
    );
};

export default Step3;
