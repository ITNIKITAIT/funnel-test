import styles from './photoPreview.module.scss';

const PhotoPreview = ({ photos }) => {
    return (
        <div className={styles.photo}>
            {photos.map((photo, i) => {
                if (i === 0)
                    return (
                        <img
                            key={i}
                            className={styles.photo__center}
                            alt="first-photo"
                            src={photo}
                        />
                    );
                if (i === 1)
                    return (
                        <img
                            key={i}
                            className={styles.photo__left}
                            alt="second-photo"
                            src={photo}
                        />
                    );
                if (i === 2)
                    return (
                        <img
                            key={i}
                            className={styles.photo__right}
                            alt="thrird-photo"
                            src={photo}
                        />
                    );

                return null;
            })}
        </div>
    );
};

export default PhotoPreview;
