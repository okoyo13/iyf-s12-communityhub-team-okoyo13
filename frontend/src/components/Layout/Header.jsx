import { NavLink } from "react-router-dom";
import Button from "../shared/Button";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>CommunityHub</h1>
        <p>Connecting people and communities.</p>
      </div>

      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
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
