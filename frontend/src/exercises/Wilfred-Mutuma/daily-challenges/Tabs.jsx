
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  const tabContent = {
    home: {
      title: "Welcome Home",
      message: "Welcome to the CommunityHub home tab.",
    },
    posts: {
      title: "Community Posts",
      message: "Here you can explore posts shared by the community.",
    },
    profile: {
      title: "My Profile",
      message: "View and manage your community profile here.",
    },
  };

  return (
    <section>
      <h2>Tabs Challenge</h2>

      <div role="tablist" aria-label="Community sections">
        <button
          role="tab"
          id="tab-home"
          aria-selected={activeTab === "home"}
          aria-controls="panel-home"
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button
          role="tab"
          id="tab-posts"
          aria-selected={activeTab === "posts"}
          aria-controls="panel-posts"
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>

        <button
          role="tab"
          id="tab-profile"
          aria-selected={activeTab === "profile"}
          aria-controls="panel-profile"
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        <h3>{tabContent[activeTab].title}</h3>
        <p>{tabContent[activeTab].message}</p>
      </div>
    </section>
  );
}

export default Tabs;
