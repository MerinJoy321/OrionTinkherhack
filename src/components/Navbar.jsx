"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();

    const [role, setRole] = useState(null);

    useEffect(() => {
        setRole(localStorage.getItem("userRole"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        router.push("/");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 60px",
                background: "rgba(255, 255, 255, 0.95)", // --bg-white with opacity
                backdropFilter: "blur(10px)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease"
            }}
        >
            <h2
                style={{
                    cursor: "pointer",
                    color: "var(--primary-blue)",
                    fontWeight: "bold",
                    margin: 0,
                    letterSpacing: "-0.5px"
                }}
                onClick={() => router.push("/")}
            >
                LabourConnect
            </h2>

            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {role === "client" && (
                    <>
                        <Button
                            type="text"
                            onClick={() => router.push("/home")}
                            style={{ color: "var(--text-dark)", fontWeight: "500", fontSize: "16px" }}
                        >
                            Home
                        </Button>
                        <Button
                            type="text"
                            onClick={() => router.push("/ai-chat")}
                            style={{ color: "var(--primary-blue)", fontWeight: "600", fontSize: "16px" }}
                        >
                            AI Chat
                        </Button>
                    </>
                )}

                {role === "worker" && (
                    <Button
                        type="text"
                        onClick={() => router.push("/worker-dashboard")}
                        style={{ color: "var(--text-dark)", fontWeight: "500", fontSize: "16px" }}
                    >
                        Dashboard
                    </Button>
                )}

                {role ? (
                    <Button className="secondary-btn" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button className="primary-btn" onClick={() => router.push("/login")}>
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
}
