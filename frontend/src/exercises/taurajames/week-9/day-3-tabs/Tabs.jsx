import { useState } from "react";

function Tabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);
  if (tabs.length === 0) {
    return <p>No tabs available.</p>;
  }

  return (
    <div>
      <div role="tablist" aria-label="Content tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
