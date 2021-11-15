import styles from './cta.module.css';

const CTA = () => {
    return (
        <div className={styles.cta}>
            <div className={styles.cta_content}>
                <p>Request Early Access to Get Started</p>
                <h3>
                    Register today & start exploring the endless possiblities.
                </h3>
            </div>

            <div className={styles.cta_button}>
                <button type='button'>Get Started</button>
            </div>
        </div>
    );
};

export default CTA;
