import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>CommunityHub</h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/posts">
          Posts
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;