"use client";
import { useAuth } from "@/utils/useAuth";
import { useState } from "react";
import { Button } from "../Button/Button";

export const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const { signIn, createUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await createUser(email, password);
      }
    } catch (err) {
      setError("Error: " + (err as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg text-black">
      <h2 className="text-xl font-bold mb-4">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500"
      >
        {isLogin
          ? "Need an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};
