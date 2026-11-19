function Button({
  children,
  text = "Click me",
  type = "button",
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  loading = false,
}) {
  return (
    <button
      className={`button btn-${variant} btn-${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && <span className="button-spinner" aria-hidden="true"></span>}
      {children ?? text}
    </button>
  );
}

export default Button;
