"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Row, Col, Typography, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Navbar from "@/components/Navbar";
import WorkerCard from "@/components/WorkerCard";
import { getWorkers } from "@/services/api";

const { Title, Text } = Typography;

export default function Home() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredWorkers, setFilteredWorkers] = useState([]);

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    useEffect(() => {
        const allWorkers = getWorkers();
        if (!searchTerm) {
            setFilteredWorkers(allWorkers);
        } else {
            setFilteredWorkers(
                allWorkers.filter(w =>
                    w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    w.skill.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm]);

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }} className="fade-in">

                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <Title level={1} style={{ marginBottom: "20px" }}>Find the Right Expert for Your Task</Title>
                    <Text type="secondary" style={{ fontSize: "18px" }}>Trusted, verified professionals ready to help.</Text>

                    <div style={{ maxWidth: "600px", margin: "40px auto 0" }}>
                        <Input
                            placeholder="Search by name or skill (e.g. Carpenter, Plumber)..."
                            size="large"
                            prefix={<SearchOutlined style={{ color: "var(--primary-blue)" }} />}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                height: "60px",
                                borderRadius: "30px",
                                fontSize: "18px",
                                border: "2px solid #E6F0FF",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
                            }}
                        />
                    </div>
                </div>

                {filteredWorkers.length > 0 ? (
                    <div style={{
                        display: "flex",
                        gap: "32px",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>
                        {filteredWorkers.map((worker) => (
                            <WorkerCard key={worker.id} worker={worker} />
                        ))}
                    </div>
                ) : (
                    <Empty description="No workers found matching your search." style={{ marginTop: "40px" }} />
                )}
            </div>
        </>
    );
}
