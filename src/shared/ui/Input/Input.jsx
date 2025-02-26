import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';
import styles from './input.module.scss';

const Input = ({ value, setValue, placeholder, setIsEmailValid }) => {
    const [error, setError] = useState(null);

    const validateEmail = useCallback(
        throttle((value) => {
            if (!value) {
                setError('Email cannot be empty');
                setIsEmailValid(false);
            } else if (!value.includes('@')) {
                setError('Email must contain @');
                setIsEmailValid(false);
            } else {
                setError(null);
                setIsEmailValid(true);
            }
        }, 500),
        []
    );

    useEffect(() => {
        validateEmail(value);
    }, [validateEmail, value]);

    return (
        <>
            <input
                placeholder={placeholder}
                className={`${styles.input} ${
                    error && styles['input-invalid']
                }`}
                type="text"
                autoFocus={true}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {error && <p className={styles['input-error']}>{error}</p>}
        </>
    );
};

export default Input;
