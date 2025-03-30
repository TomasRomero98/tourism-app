import Link from "next/link";
import { Button } from "../Button/Button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between mb-2 bg-blue-600" data-testid="navbar">
      <div className="flex">
        <img
          src="images/logo.svg"
          alt="page logo"
          className="w-10 h-auto bg-white"
        />
        <Button>
          <Link href="/">Inicio</Link>
        </Button>
        <Button>
          <Link href="/dashboard">Paquetes de viaje</Link>
        </Button>
      </div>
      <Button>
        <Link href="/registrarse">Iniciar sesion</Link>
      </Button>
    </nav>
  );
};
