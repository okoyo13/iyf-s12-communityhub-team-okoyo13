
function Button({
  children,
  text,
  type = "button",
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
}) {
  const buttonText = text ?? children ?? "Click me";

  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className="spinner button-spinner" aria-hidden="true"></span>
          Loading...
        </>
      ) : (
        buttonText
      )}
    </button>
  );
}

export default Button;
