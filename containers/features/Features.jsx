import { Feature } from '../../components';
import { featuresData } from './data';
import styles from './features.module.css';

const Features = () => {
    return (
        <div className={`${styles.features} section__padding`} id='features'>
            <div className={styles.features_heading}>
                <h1 className='gradient__text'>
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className={styles.features_container}>
                {featuresData.map(feature => (
                    <Feature
                        key={feature.id}
                        text={feature.text}
                        title={feature.title}
                        horz={feature.horz}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;
