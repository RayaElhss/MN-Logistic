import React from 'react';

const ErrorFallback = ({ error }) => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Something went wrong.</h2>
        <p>{error ? error.message : 'An unexpected error occurred.'}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
);

export default ErrorFallback;
