import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />

      <div className="app-layout">
        <Sidebar />

        <div className="app-main">
          <main className="main-content">{children}</main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
