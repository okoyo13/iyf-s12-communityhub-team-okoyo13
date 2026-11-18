import Button from "../shared/Button";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>CommunityHub</h1>
        <p>Connecting people and communities.</p>
      </div>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#posts">Posts</a>
        <a href="#about">About</a>
        <a href="#profile">Profile</a>
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
