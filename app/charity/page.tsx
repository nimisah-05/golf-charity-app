"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function Charity() {
  const [charities, setCharities] = useState<any[]>([]);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    const { data } = await supabase.from("charities").select("*");
    setCharities(data || []);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6">Select Charity</h1>

      {charities.map((c) => (
        <button
          key={c.id}
          onClick={() => {
            localStorage.setItem("selectedCharity", c.id);
            window.location.href = "/dashboard";
          }}
          className="bg-white text-black p-3 m-2 rounded"
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}