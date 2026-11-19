
function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading-spinner">
      <span className="spinner" aria-hidden="true"></span>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
