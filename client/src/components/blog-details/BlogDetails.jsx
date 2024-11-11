// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../data/articlesData'; // Import the data

const BlogDetails = () => {
    const { id } = useParams();
    const article = articles.find((item) => item.id === parseInt(id));

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '90px 50px', // Increased padding for top/bottom space
            maxWidth: '800px',
            margin: '90px auto', // Add top/bottom margin for even more space
            backgroundColor: '#f9f9f9', // Optional: add a background color for better visual separation
            borderRadius: '8px' // Optional: rounded corners for aesthetics
        }}>
            <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '10px' }}>{article.title}</h1>
            <p style={{ fontSize: '18px', color: '#555', marginTop: '0' }}>{article.content}</p>
            <p style={{ fontSize: '18px', color: '#555', marginTop: '20px' }}>{article.info}</p>
        </div>
    );
};

export default BlogDetails;
