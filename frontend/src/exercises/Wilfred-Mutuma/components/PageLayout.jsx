import Header from "./Header";
import Footer from "./Footer";

function PageLayout({ children, sidebar = null }) {
  return (
    <div className="page-layout">
      <Header />

      <div className="page-content">
        {sidebar && (
          <aside className="page-sidebar">
            {sidebar}
          </aside>
        )}

        <main className="page-main">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default PageLayout;