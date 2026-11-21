import { useState } from "react";

function Tabs({ tabs, initialTab = 0 }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div>
      <div role="tablist">
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

      <div role="tabpanel">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
