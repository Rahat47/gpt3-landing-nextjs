import styles from './footer.module.css';
import Image from 'next/image';
import gpt3Logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <div className={`${styles.footer} section__padding`}>
            <div className={styles.footer_heading}>
                <h1 className='gradient__text'>
                    Do you want to step in to the future before others
                </h1>
            </div>

            <div className={styles.footer_btn}>
                <p>Request Early Access</p>
            </div>

            <div className={styles.footer_links}>
                <div className={styles.footer_logo}>
                    <Image src={gpt3Logo} alt='logo' width={118} height={30} />
                    <address>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </address>
                </div>

                <div className={styles.footer_links_div}>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className={styles.footer_links_div}>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className={styles.footer_links_div}>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className={styles.footer_copy}>
                <p>&copy; 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
