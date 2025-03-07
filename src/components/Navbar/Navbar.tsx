import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="links">
        <Link href="/">Inicio</Link>
        <Link href="/dashboard">Paquetes de viaje</Link>
        <div>Ingresar/Registrarse</div>
      </div>
    </nav>
  );
};
