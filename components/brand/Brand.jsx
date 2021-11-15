import google from '../../assets/images/google.png';
import slack from '../../assets/images/slack.png';
import atlassian from '../../assets/images/atlassian.png';
import dropbox from '../../assets/images/dropbox.png';
import shopify from '../../assets/images/shopify.png';

import Image from 'next/image';
import styles from './brand.module.css';

const Brand = () => {
    return (
        <div className={`${styles.brand} section__padding`}>
            <div>
                <Image src={google} alt='google Logo' />
            </div>
            <div>
                <Image src={slack} alt='slack Logo' />
            </div>
            <div>
                <Image src={atlassian} alt='atlassian Logo' />
            </div>
            <div>
                <Image src={dropbox} alt='dropbox Logo' />
            </div>
            <div>
                <Image src={shopify} alt='shopify Logo' />
            </div>
        </div>
    );
};

export default Brand;
