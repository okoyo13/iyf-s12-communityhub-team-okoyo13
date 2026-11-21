import Button from "../shared/Button";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>CommunityHub</h1>
        <p>Connecting people and communities.</p>
      </div>

      <nav className="header-nav" aria-label="Main navigation">
        <a className="header-link" href="#home">Home</a>
        <a className="header-link" href="#posts">Posts</a>
        <a className="header-link" href="#about">About</a>
        <a className="header-link" href="#profile">Profile</a>
      </nav>

      <div className="user-menu">
        <Button onClick={() => alert("Login feature coming soon!")}>
          Login
        </Button>
      </div>
    </header>
  );
}

export default Header;