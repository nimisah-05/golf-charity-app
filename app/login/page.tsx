"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return alert("Enter email");

    localStorage.setItem("userEmail", email);
    router.push("/charity");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">Login</h1>
      <input
        className="text-black p-2"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 p-2 mt-2">
        Login
      </button>
    </div>
  );
}