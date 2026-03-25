"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function DrawPage() {
  const [winner, setWinner] = useState<any>(null)
  const [myCharity, setMyCharity] = useState<string | null>(null)

  useEffect(() => {
    const charityId = localStorage.getItem("selectedCharity")
    setMyCharity(charityId)

    const getWinner = async () => {
      const { data } = await supabase
        .from("scores")
        .select("*")
        .order("score", { ascending: false })
        .limit(1)

      if (data && data.length > 0) {
        setWinner(data[0])
      }
    }

    getWinner()
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎯 Draw Result</h1>

      {winner ? (
        <>
          <h2>Winner Charity ID:</h2>
          <p>{winner.charity_id}</p>

          {winner.charity_id === myCharity ? (
            <h1 style={{ color: "green" }}>🎉 YOU WIN</h1>
          ) : (
            <h1 style={{ color: "red" }}>😢 YOU LOST</h1>
          )}
        </>
      ) : (
        <p>Loading draw...</p>
      )}
    </div>
  )
}