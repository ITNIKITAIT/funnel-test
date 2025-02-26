import Progress from '../../shared/ui/Progress/Progress';
import PhotoPreview from '../PhotoPreview/PhotoPreview';
import Question from '../Question/Question';
import styles from './step.module.scss';

import woman1 from '../../assets/img/woman1.jpg';
import woman2 from '../../assets/img/woman2.jpg';
import woman3 from '../../assets/img/woman3.jpg';
import man1 from '../../assets/img/man1.png';
import man2 from '../../assets/img/man2.png';
import man3 from '../../assets/img/man3.png';

const Step2 = ({
    lookingFor,
    nextStep,
    prevStep,
    setAcceptsInitiative,
    acceptsInitiative,
}) => {
    const question =
        lookingFor === 'man'
            ? 'Do you agree that man should take the initiative to meet a woman?'
            : 'Do you agree to always answer women who take the initiative and contact you?';

    const photos =
        lookingFor === 'man' ? [man1, man2, man3] : [woman1, woman2, woman3];

    const handleChange = (value) => {
        if (acceptsInitiative === null) {
            nextStep();
        }
        setAcceptsInitiative(value);
    };

    const isActiveNextStep = acceptsInitiative !== null;

    return (
        <section className={styles.step}>
            <Progress
                isActiveNextStep={isActiveNextStep}
                prevStep={prevStep}
                nextStep={nextStep}
                value={33}
            />
            <PhotoPreview photos={photos} />
            <Question
                value={acceptsInitiative}
                onChange={handleChange}
                question={question}
            />
        </section>
    );
};

export default Step2;
