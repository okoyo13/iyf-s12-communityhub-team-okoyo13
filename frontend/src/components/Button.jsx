function Button({
  children,
  text = "Click me",
  type = "button",
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`button btn-${variant} btn-${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? text}
    </button>
  );
}

export default Button;
