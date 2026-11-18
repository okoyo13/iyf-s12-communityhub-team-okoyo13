function Button({
 Wilfred-Mutuma/week-08-communityhub
  children,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}

  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;