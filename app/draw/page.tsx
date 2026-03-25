"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function Draw() {
  const [winner, setWinner] = useState<any>(null);

  useEffect(() => {
    runDraw();
  }, []);

  const runDraw = async () => {
    const { data } = await supabase
      .from("charities")
      .select("*")
      .order("total_score", { ascending: false })
      .limit(1);

    setWinner(data?.[0]);
  };

  const myCharity = localStorage.getItem("selectedCharity");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Draw Result</h1>

      {winner && (
        <div>
          Winner: {winner.name}
          <br />
          {winner.id === myCharity ? "🎉 YOU WIN" : "😢 YOU LOST"}
        </div>
      )}
    </div>
  );
}