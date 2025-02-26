import Button from '../../shared/ui/Button/Button';
import Logo from '../../shared/ui/Logo/Logo';
import SelectGroup from '../../shared/ui/SelectGroup/SelectGroup';
import styles from './step.module.scss';

const Step1 = ({ lookingFor, gender, setGender, setLookingFor, nextStep }) => {
    const changeGender = (value) => {
        if (!gender && !lookingFor) {
            setLookingFor(value === 'man' ? 'woman' : 'man');
        }
        setGender(value);
    };

    return (
        <section className={styles.step}>
            <div>
                <Logo />
                <h1 className={styles.step__title}>
                    The biggest database of dating profiles
                </h1>
            </div>
            <div>
                <div className={styles.step__block}>
                    <p>I am...</p>
                    <SelectGroup
                        options={[
                            { value: 'man', label: '👨 A man' },
                            {
                                value: 'woman',
                                label: '👩 A woman',
                            },
                        ]}
                        value={gender}
                        onChange={changeGender}
                    />
                </div>
                <div className={styles.step__block}>
                    <p>I am looking for...</p>
                    <SelectGroup
                        options={[
                            { value: 'man', label: '👨 A man' },
                            {
                                value: 'woman',
                                label: '👩 A woman',
                            },
                        ]}
                        value={lookingFor}
                        onChange={setLookingFor}
                    />
                </div>
                <p className={styles.step__warn}>
                    You can always change who you want to meet
                </p>
                <Button isDisabled={!gender || !lookingFor} onClick={nextStep}>
                    Start
                </Button>
            </div>
        </section>
    );
};

export default Step1;
