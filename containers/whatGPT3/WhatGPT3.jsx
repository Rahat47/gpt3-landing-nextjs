import { Feature } from '../../components';
import styles from './whatGPT3.module.css';

const WhatGPT3 = () => {
    return (
        <div className={`${styles.what_gpt3} section__margin`} id='what-is-gpt'>
            <div className={styles.what_gpt3_feature}>
                <Feature
                    title='What is GPT-3'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                    horz
                />
            </div>
            <div className={styles.what_gpt3_heading}>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>

            <div className={styles.what_gpt3_container}>
                <Feature
                    title='Chatbots'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
                />
                <Feature
                    title='Knowledgebase'
                    text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                />
                <Feature
                    title='Education'
                    text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                />
            </div>
        </div>
    );
};

export default WhatGPT3;
