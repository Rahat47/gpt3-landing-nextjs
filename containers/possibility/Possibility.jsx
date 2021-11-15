import styles from './possibility.module.css';
import Image from 'next/image';
import possibilityImg from '../../assets/images/possibility.png';

const Possibility = () => {
    return (
        <div
            className={`${styles.possibility} section__padding`}
            id='possibility'
        >
            <div className={styles.possibility_img}>
                <Image src={possibilityImg} alt='woman with VR headset' />
            </div>

            <div className={styles.possibility_content}>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;
