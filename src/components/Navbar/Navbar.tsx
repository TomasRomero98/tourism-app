"use client";
import { useAuth } from "@/utils/useAuth";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between mb-2 bg-blue-600" data-testid="navbar">
      <div className="flex">
        <img
          src="images/logo.svg"
          alt="Logo"
          className="w-10 h-auto bg-white"
        />
        <Button>
          <Link href="/">Inicio</Link>
        </Button>
        <Button>
          <Link href="/dashboard">Paquetes de viaje</Link>
        </Button>
      </div>
      {user ? (
        <div className="relative">
          <Button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <img
              src="images/profile-icon.svg"
              alt="Perfil"
              className="w-10 h-auto bg-white"
            />
          </Button>
          <div className="absolute right-0 flex flex-col min-w-[150px]">
            <Button>
              <Link href="/perfil">Perfil</Link>
            </Button>
            <Button onClick={logout}>Cerrar Sesión</Button>
          </div>
        </div>
      ) : (
        <Button>
          <Link href="/registrarse">Iniciar sesion</Link>
        </Button>
      )}
    </nav>
  );
};
