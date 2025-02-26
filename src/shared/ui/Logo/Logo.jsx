import styles from './logo.module.scss';
import logo from '../../../assets/img/logo.png';

const Logo = () => {
    return <img className={styles.logo} alt="logo" src={logo} />;
};

export default Logo;
