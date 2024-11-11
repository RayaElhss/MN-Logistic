// BlogCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';
import articles from '../../data/articlesData'; // Import the data

const BlogCard = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        
        <div className={styles['blog-container']}> {/* Wrap content in this div */}
        
            <header className={styles.header}>
                <h1>НАШИЯТ БЛОГ</h1>
            </header>
            <div className={styles.band}>
                
                {articles.map((article) => (
                    <div key={article.id} className={styles[`item-${article.id}`]}>
                        <div
                            onClick={() => handleCardClick(article.id)}
                            className={styles.card}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles.thumb} style={{ backgroundImage: `url(${article.image})` }}></div>
                            <article>
                                <h1>{article.title}</h1>
                            </article>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
