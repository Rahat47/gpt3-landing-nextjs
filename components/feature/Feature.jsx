import styles from './feature.module.css';

const Feature = ({ title, text, horz }) => {
    return (
        <div className={styles.features_container_feature}>
            <div className={styles.features_container_feature__title}>
                <div />
                <h1>{title}</h1>
            </div>

            <div
                className={styles.features_container_feature__text}
                style={{
                    maxWidth: horz ? '700px' : '400px',
                    marginTop: horz ? '0' : '0.5rem',
                }}
            >
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;
