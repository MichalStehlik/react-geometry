export const ErrorFallback = ({ error, resetErrorBoundary, componentStack }) => {
    const containerStyle = {
        margin: 0,
        display: "block",
        height: "100%",
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        fontFamily: "sans-serif"
    };
    return (
        <div role="alert" style={containerStyle}>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <pre>{ componentStack }</pre>
            <button onClick={resetErrorBoundary}>Reset</button>
        </div>
    )
}
export default ErrorFallback;