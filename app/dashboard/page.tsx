"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function Dashboard() {
  const [score, setScore] = useState("");

  const addScore = async () => {
    const charityId = localStorage.getItem("selectedCharity");

    if (!charityId) {
      alert("Please select charity first");
      return;
    }

    const { error } = await supabase.from("scores").insert([
      {
        email: "test@gmail.com",
        score: Number(score),
        charity_id: charityId,
      },
    ]);

    if (error) {
      alert("Error adding score");
      console.log(error);
    } else {
      alert("Score added!");
      setScore("");
      window.location.href = "/draw";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">Add Golf Score</h1>

      <input
        value={score}
        onChange={(e) => setScore(e.target.value)}
        placeholder="Enter score"
        className="text-black p-2"
      />

      <button
        onClick={addScore}
        className="bg-green-500 text-black p-2 mt-2"
      >
        Add Score
      </button>
    </div>
  );
}