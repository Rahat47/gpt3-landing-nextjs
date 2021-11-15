import styles from './header.module.css';
import ai from '../../assets/images/ai.png';
import people from '../../assets/images/people.png';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={`${styles.header} section__padding`} id='home'>
            <div className={styles.header_content}>
                <h1 className='gradient__text'>
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className={styles.header_content_input}>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter your email...'
                    />
                    <button type='button'>Get Started</button>
                </div>

                <div className={styles.header_content_people}>
                    <Image
                        src={people}
                        alt='people that use our app'
                        width={182}
                        height={38}
                    />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className={styles.header_img}>
                <Image src={ai} alt='ai' />
            </div>
        </div>
    );
};

export default Header;
