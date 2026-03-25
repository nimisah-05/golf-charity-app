import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "40px" }}>
        Golf Charity Platform
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/dashboard">
          <button style={btnGreen}>Add Score</button>
        </Link>

        <Link href="/charity">
          <button style={btnBlue}>Select Charity</button>
        </Link>

        <Link href="/draw">
          <button style={btnYellow}>Run Draw</button>
        </Link>
      </div>

      <Link href="/login">
        <button style={loginBtn}>Go to Login</button>
      </Link>
    </div>
  );
}

const btnGreen = {
  background: "#22c55e",
  padding: "15px 25px",
  borderRadius: "10px",
  border: "none",
};

const btnBlue = {
  background: "#3b82f6",
  padding: "15px 25px",
  borderRadius: "10px",
  border: "none",
  color: "white",
};

const btnYellow = {
  background: "#facc15",
  padding: "15px 25px",
  borderRadius: "10px",
  border: "none",
};

const loginBtn = {
  marginTop: "40px",
  padding: "10px 20px",
};