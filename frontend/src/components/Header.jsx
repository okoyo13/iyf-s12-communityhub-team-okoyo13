import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#posts" className="header-link">Posts</a>
        <a href="#about" className="header-link">About</a>
      </nav>
    </header>
  );
}

export default Header;
