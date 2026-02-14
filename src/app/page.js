"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Landing() {
  const router = useRouter();

  const handleRoleSelection = (role) => {
    localStorage.setItem("userRole", role);
    router.push("/login");
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          padding: "160px 20px",
          background: "linear-gradient(180deg, var(--bg-white) 0%, var(--bg-gray) 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Floating Abstract Shapes */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "var(--accent-light)",
          filter: "blur(120px)",
          opacity: 0.6,
          borderRadius: "50%",
          zIndex: 0
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "var(--primary-blue)",
          filter: "blur(140px)",
          opacity: 0.1,
          borderRadius: "50%",
          zIndex: 0
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }} className="fade-in">
          <h1 style={{
            fontSize: "64px",
            color: "var(--text-dark)",
            marginBottom: "24px",
            lineHeight: "1.2",
            fontWeight: "700"
          }}>
            Find Trusted Skilled <br />
            <span style={{ color: "var(--primary-blue)" }}>Workers Instantly</span>
          </h1>
          <p style={{
            fontSize: "20px",
            color: "var(--text-light)",
            marginBottom: "48px",
            maxWidth: "600px",
            margin: "0 auto 48px auto"
          }}>
            Real People. Real Skills. Reliable Service — On Your Schedule.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Button
              size="large"
              className="primary-btn"
              onClick={() => handleRoleSelection("client")}
              style={{ height: "56px", padding: "0 40px", fontSize: "18px" }}
            >
              Explore Workers
            </Button>
            <Button
              size="large"
              className="secondary-btn"
              onClick={() => handleRoleSelection("worker")}
              style={{ height: "56px", padding: "0 40px", fontSize: "18px" }}
            >
              Join as Worker
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
