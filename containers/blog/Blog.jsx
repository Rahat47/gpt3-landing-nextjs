import { Article } from '../../components';
import styles from './blog.module.css';

import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className={`${styles.blog} section__padding`} id='blog'>
            <div className={styles.blog_heading}>
                <h1 className='gradient__text'>
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className={styles.blog_container}>
                <div className={styles.blog_container_groupA}>
                    <Article
                        imageUrl={blog01}
                        date='Sep 26, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                </div>
                <div className={styles.blog_container_groupB}>
                    <Article
                        imageUrl={blog02}
                        date='Sep 26, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl={blog03}
                        date='Sep 26, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl={blog04}
                        date='Sep 26, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                    <Article
                        imageUrl={blog05}
                        date='Sep 26, 2021'
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
