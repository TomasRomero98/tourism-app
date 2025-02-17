import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};
