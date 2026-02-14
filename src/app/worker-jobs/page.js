"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, List, Tag, message } from "antd";
import Navbar from "@/components/Navbar";

export default function WorkerJobsPage() {
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "worker") {
            router.push("/login");
        }
    }, [router]);

    const [jobs, setJobs] = useState([
        {
            id: 101,
            customer: "Amit Sharma",
            issue: "Broken wooden chair leg",
            location: "Andheri West (2.5 km)",
            price: 400,
            status: "pending"
        }
    ]);

    const handleAction = (id, newStatus) => {
        setJobs(jobs.map(j => j.id === id ? { ...j, status: newStatus } : j));
        message.success(`Job marked as ${newStatus}`);
    };

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }} className="fade-in">
                <Button onClick={() => router.back()} style={{ marginBottom: "20px" }}>Back to Dashboard</Button>
                <h1 style={{ color: "var(--primary-blue)", marginBottom: "30px" }}>Job Requests</h1>

                <List
                    dataSource={jobs}
                    renderItem={item => (
                        <Card key={item.id} style={{ marginBottom: "20px", borderRadius: "16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <h3>{item.issue}</h3>
                                    <p>{item.customer} • {item.location}</p>
                                    <h4 style={{ color: "var(--primary-blue)" }}>₹{item.price}</h4>
                                    <Tag color={item.status === "pending" ? "gold" : "green"}>{item.status.toUpperCase()}</Tag>
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    {item.status === "pending" ? (
                                        <>
                                            <Button type="primary" onClick={() => handleAction(item.id, "accepted")}>Accept</Button>
                                            <Button danger onClick={() => setJobs(jobs.filter(j => j.id !== item.id))}>Reject</Button>
                                        </>
                                    ) : (
                                        <Button onClick={() => router.push(`/worker-job/${item.id}`)}>Manage Status</Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    )}
                />
            </div>
        </>
    );
}
