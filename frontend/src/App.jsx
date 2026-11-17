
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./styles/Layout.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <main className="main-content">
          <h1>Welcome to CommunityHub</h1>
          <p>Connect, share and interact with your community.</p>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
