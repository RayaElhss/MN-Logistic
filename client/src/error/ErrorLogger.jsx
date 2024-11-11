const logErrorToService = (error, info) => {
    // Example: Send the error to an external service like Sentry
    console.error("Logging error:", error, info);
    // Add integration with Sentry or other services here
};

export default logErrorToService;
