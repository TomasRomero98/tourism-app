"use client";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "./firebase";

export const auth = getAuth(app);

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const createUser = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  return { user, loading, logout, signIn, createUser };
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario autenticado:", user.uid);
  } else {
    console.log("No hay usuario autenticado");
  }
});
