"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, Button, Steps, message } from "antd";
import { CarOutlined, ToolOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Navbar from "@/components/Navbar";

export default function WorkerJobDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [status, setStatus] = useState(0); // 0: Accepted, 1: Arrived, 2: Completed

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "worker") {
            router.push("/login");
        }
    }, [router]);

    const next = () => {
        const newStatus = status + 1;
        setStatus(newStatus);
        if (newStatus === 2) {
            message.success("Job Completed! Payment Received.");
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }} className="fade-in">
                <Button onClick={() => router.back()} style={{ marginBottom: "20px" }}>Back to Jobs</Button>
                <h1 style={{ color: "var(--primary-blue)", marginBottom: "30px" }}>Job Management</h1>

                <Card style={{ borderRadius: "16px" }}>
                    <h3>Job ID: #{id}</h3>
                    <p><strong>Customer:</strong> Amit Sharma</p>
                    <p><strong>Issue:</strong> Broken wooden chair leg</p>

                    <Steps
                        current={status}
                        items={[
                            { title: 'Accepted', icon: <CarOutlined /> },
                            { title: 'Arrived', icon: <ToolOutlined /> },
                            { title: 'Completed', icon: <CheckCircleOutlined /> },
                        ]}
                        style={{ margin: "40px 0" }}
                    />

                    {status < 2 ? (
                        <Button type="primary" block size="large" className="primary-btn" onClick={next}>
                            {status === 0 ? "Arrived at Location" : "Mark as Completed"}
                        </Button>
                    ) : (
                        <Button block size="large" onClick={() => router.push("/worker-dashboard")}>
                            Back to Dashboard
                        </Button>
                    )}
                </Card>
            </div>
        </>
    );
}
