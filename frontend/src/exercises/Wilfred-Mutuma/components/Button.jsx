function Button({
  text = "Click me",
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
  loading = false,
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "⏳ Loading..." : text}
    </button>
  );
}

export default Button;