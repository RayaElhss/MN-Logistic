import React, { Component } from 'react';
import ErrorFallback from './ErrorFallback';  // Custom error UI

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by Error Boundary:', error, errorInfo);
        // Optionally log error to an external service like Sentry
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback error={this.state.error} />;
        }

        return this.props.children;  // Render children if no error
    }
}

export default ErrorBoundary;
