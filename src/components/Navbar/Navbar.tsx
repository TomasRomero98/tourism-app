export const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
};
