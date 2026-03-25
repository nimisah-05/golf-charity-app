"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function Leaderboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase
      .from("charities")
      .select("*")
      .order("total_score", { ascending: false });

    setData(data || []);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl">Leaderboard</h1>

      {data.map((c, i) => (
        <div key={c.id}>
          {i + 1}. {c.name} — {c.total_score}
        </div>
      ))}

      <button
        onClick={() => (window.location.href = "/draw")}
        className="bg-yellow-400 p-2 mt-4"
      >
        Run Draw
      </button>
    </div>
  );
}