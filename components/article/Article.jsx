import styles from './article.module.css';
import Image from 'next/image';
const Article = ({ imageUrl, date, title }) => {
    return (
        <div className={styles.article}>
            <div className={styles.article_image}>
                <Image src={imageUrl} alt='Blog' />
            </div>
            <div className={styles.article_content}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
