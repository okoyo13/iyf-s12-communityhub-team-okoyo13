
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">CommunityHub</h2>

      <nav className="sidebar-nav">
        <a href="#home" className="sidebar-link active">
          Home
        </a>

        <a href="#profile" className="sidebar-link">
          My Profile
        </a>

        <a href="#explore" className="sidebar-link">
          Explore
        </a>

        <a href="#settings" className="sidebar-link">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
