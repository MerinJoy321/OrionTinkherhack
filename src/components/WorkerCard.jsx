"use client";
import { Card, Button } from "antd";
import { useRouter } from "next/navigation";

export default function WorkerCard({ worker }) {
    const router = useRouter();

    const isAvailable = worker.available !== false; // Default to true if not specified

    return (
        <Card
            hoverable
            className="hover-card"
            style={{
                width: 300,
                borderRadius: "20px",
                overflow: "hidden",
                border: "none",
                background: "white",
                position: "relative"
            }}
            cover={
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <div style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: isAvailable ? "rgba(0, 102, 255, 0.9)" : "rgba(107, 114, 128, 0.8)",
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        zIndex: 1
                    }}>
                        {isAvailable ? "Available" : "Busy"}
                    </div>
                    <img
                        alt="worker"
                        src={worker.image}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            }
        >
            <div style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <h3 style={{ margin: "0 0 4px 0", fontSize: "18px", fontWeight: "700" }}>{worker.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: "600" }}>
                        <span style={{ color: "#FFD700" }}>★</span> {worker.rating || "N/A"}
                    </div>
                </div>
                <p style={{ color: "var(--primary-blue)", fontWeight: "600", marginBottom: "4px" }}>{worker.skill}</p>
                <p style={{ color: "var(--text-light)", fontSize: "13px", marginBottom: "4px" }}>
                    {worker.location || "Mumbai"} • {worker.distance ? `${worker.distance} km` : ""}
                </p>
                <p style={{ color: "var(--text-dark)", fontSize: "14px", fontWeight: "600", marginBottom: "16px" }}>
                    ₹{worker.rate}/day
                </p>

                <Button
                    block
                    className="primary-btn"
                    onClick={() => router.push(`/workers/${worker.id}`)}
                    style={{ height: "40px", fontSize: "14px" }}
                >
                    View Details
                </Button>
            </div>
        </Card>
    );
}
