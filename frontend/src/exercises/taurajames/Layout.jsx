function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>My React Practice</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>Learning React, one component at a time.</p>
      </footer>
    </div>
  )
}

export default Layout