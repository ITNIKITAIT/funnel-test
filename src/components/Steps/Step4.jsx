import Loader from '../../components/Loader/Loader';
import Logo from '../../shared/ui/Logo/Logo';
import styles from './step.module.scss';

const Step4 = () => {
    return (
        <section className={styles.step}>
            <Logo />
            <Loader />
            <div></div>
        </section>
    );
};

export default Step4;
