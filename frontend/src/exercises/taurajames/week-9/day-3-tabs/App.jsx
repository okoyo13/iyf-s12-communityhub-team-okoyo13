import Tabs from "./Tabs";

function App() {
  const tabItems = [
    {
      label: "Home",
      content: <p>Welcome to the CommunityHub Home tab!</p>,
    },
    {
      label: "About",
      content: <p>CommunityHub connects people and communities.</p>,
    },
    {
      label: "Contact",
      content: <p>Contact us for more information.</p>,
    },
  ];

  return (
    <main>
      <h1>Day 3: Reusable Tabs Component</h1>
      <Tabs tabs={tabItems} />
    </main>
  );
}

export default App;
