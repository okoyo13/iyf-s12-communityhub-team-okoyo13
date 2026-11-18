import "../../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">CommunityHub</h2>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        <a href="#home" className="sidebar-link active">
          Home
        </a>
        <a href="#posts" className="sidebar-link">
          Community Posts
        </a>
        <a href="#profile" className="sidebar-link">
          My Profile
        </a>
      </nav>

      <section id="about">
        <h3>About</h3>
        <p>
          CommunityHub is a place to connect, share ideas, and learn from other
          community members.
        </p>
      </section>

      <section>
        <h3>Popular Posts</h3>
        <ul>
          <li>Welcome to CommunityHub</li>
          <li>Learning React Props</li>
          <li>Building Strong Communities</li>
        </ul>
      </section>

      <section>
        <h3>Categories</h3>
        <ul>
          <li>Technology</li>
          <li>Education</li>
          <li>Community</li>
          <li>Announcements</li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
