function Card({ title, children, variant = "primary" }) {
  return (
    <section className={`challenge-card card-${variant}`}>
      {title && <h3>{title}</h3>}
      <div className="challenge-card-content">{children}</div>
    </section>
  );
}

export default Card;