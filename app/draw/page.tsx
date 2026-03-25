"use client"

import { useEffect, useState } from "react"

export default function DrawPage() {
  const [charityId, setCharityId] = useState<string | null>(null)

  useEffect(() => {
    const id = localStorage.getItem("selectedCharity")
    setCharityId(id)
  }, [])

  if (!charityId) {
    return <h1>No charity selected</h1>
  }

  return (
    <div>
      <h1>Draw Game Page</h1>
      <p>Charity: {charityId}</p>
    </div>
  )
}