import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import Popup from '../Popup/Popup';
import Question from '../../../components/Question/Question';
import 'react-circular-progressbar/dist/styles.css';
import styles from './loader.module.scss';

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [currPopup, setCurrPopup] = useState(null);

    const questions = [
        {
            threshold: 25,
            text: 'Is building a future with a partner who shares your long-term goals essential to you?',
        },
        {
            threshold: 50,
            text: 'Do you prioritize emotional connection and compatibility in your relationships?',
        },
        {
            threshold: 75,
            text: 'Do you prefer keeping things light and easy-going when it comes to dating?',
        },
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                const next = prev + 1;

                const nextPopup = questions.find(
                    (question) => question.threshold === next
                );
                if (nextPopup) {
                    setCurrPopup(nextPopup);
                    setIsPaused(true);
                }
                return next;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isPaused]);

    const closePopup = () => {
        setCurrPopup(null);
        setIsPaused(false);
    };

    return (
        <div>
            <CircularProgressbar
                className={styles.circle}
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    pathColor: `#ff4931`,
                    textColor: '#000000',
                    trailColor: '#fff',
                    backgroundColor: '#3e98c7',
                })}
            />
            {progress !== 100 && (
                <p className={styles.loader__subtitle}>
                    Analyzing your answers...
                </p>
            )}

            {currPopup && (
                <Popup>
                    <Question
                        question={
                            questions.find(
                                (p) => p.threshold === currPopup.threshold
                            )?.text
                        }
                        value={null}
                        onChange={closePopup}
                    />
                </Popup>
            )}
        </div>
    );
};

export default Loader;
