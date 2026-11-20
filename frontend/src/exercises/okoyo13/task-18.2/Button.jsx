import styles from "./Button.module.css";

function Button({ children, variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
