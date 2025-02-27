import { useState } from 'react';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';

const Home = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        gender: '',
        lookingFor: '',
        acceptsInitiative: null,
        email: '',
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <>
            {step === 1 && (
                <Step1
                    gender={formData.gender}
                    setGender={(value) =>
                        setFormData((prev) => ({ ...prev, gender: value }))
                    }
                    setLookingFor={(value) =>
                        setFormData((prev) => ({ ...prev, lookingFor: value }))
                    }
                    lookingFor={formData.lookingFor}
                    nextStep={nextStep}
                />
            )}
            {step === 2 && (
                <Step2
                    lookingFor={formData.lookingFor}
                    setAcceptsInitiative={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            acceptsInitiative: value,
                        }))
                    }
                    acceptsInitiative={formData.acceptsInitiative}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}
            {step === 3 && (
                <Step3
                    email={formData.email}
                    setEmail={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: value,
                        }))
                    }
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}
            {step === 4 && <Step4 />}
        </>
    );
};

export default Home;
