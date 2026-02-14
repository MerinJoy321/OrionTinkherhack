"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, Row, Col, Statistic, Tag, Avatar, Badge, message } from "antd";
import { UserOutlined, DashboardOutlined, SolutionOutlined, HistoryOutlined, LineChartOutlined, StarOutlined } from "@ant-design/icons";
import Navbar from "@/components/Navbar";

export default function WorkerDashboard() {
    const router = useRouter();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "worker") {
            router.push("/login");
        }
    }, [router]);

    // Simulate receiving a job request
    useEffect(() => {
        const timer = setTimeout(() => {
            setJobs([
                {
                    id: 101,
                    customer: "Amit Sharma",
                    issue: "Broken wooden chair leg",
                    location: "Andheri West (2.5 km)",
                    price: 400,
                    status: "pending"
                }
            ]);
            message.info("New Job Request Received!");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }} className="fade-in">

                <div style={{ marginBottom: "40px" }}>
                    <h1 style={{ color: "var(--primary-blue)" }}>Worker Dashboard</h1>
                    <p style={{ color: "var(--text-light)" }}>Manage your profile, jobs, and earnings.</p>
                </div>

                {/* Summary Row */}
                <Row gutter={[24, 24]} style={{ marginBottom: "40px" }}>
                    <Col xs={24} sm={12} lg={8}>
                        <Card variant="borderless" style={{ height: "100%", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                            <Statistic
                                title="Total Earnings"
                                value={12400}
                                precision={2}
                                prefix="₹"
                                valueStyle={{ color: 'var(--primary-blue)' }}
                            />
                            <div style={{ marginTop: "10px" }}>
                                <Tag color="green">+15% this week</Tag>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card variant="borderless" style={{ height: "100%", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                            <Statistic
                                title="Average Rating"
                                value={4.8}
                                suffix="/ 5"
                                prefix={<StarOutlined style={{ color: "#fadb14" }} />}
                            />
                            <div style={{ marginTop: "10px" }}>
                                <RateSummary />
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} lg={8}>
                        <Card variant="borderless" style={{ height: "100%", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                            <Statistic title="Jobs Completed" value={28} />
                            <div style={{ marginTop: "10px" }}>
                                <Tag color="blue">Top Rated Worker</Tag>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/* Actions Section */}
                <div style={{ marginBottom: "40px" }}>
                    <h2 style={{ marginBottom: "20px" }}>Quick Actions</h2>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                            <Button
                                block
                                size="large"
                                icon={<SolutionOutlined />}
                                onClick={() => router.push("/worker-profile")}
                                style={{ height: "60px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                Edit Profile
                            </Button>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Button
                                block
                                type="primary"
                                size="large"
                                className="primary-btn"
                                icon={<HistoryOutlined />}
                                onClick={() => router.push("/worker-jobs")}
                                style={{ height: "60px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                View Job Requests {jobs.length > 0 && <Badge count={jobs.length} style={{ marginLeft: "10px" }} />}
                            </Button>
                        </Col>
                    </Row>
                </div>

                <Card title="Current Job Requests" style={{ borderRadius: "16px" }}>
                    {jobs.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "20px" }}>
                            <p style={{ color: "var(--text-light)" }}>Waiting for new requests...</p>
                            <Badge status="processing" text="Online" />
                        </div>
                    ) : (
                        jobs.map(job => (
                            <div key={job.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
                                <div>
                                    <h4 style={{ margin: 0 }}>{job.issue}</h4>
                                    <p style={{ margin: 0, color: "var(--text-light)" }}>{job.location} • ₹{job.price}</p>
                                </div>
                                <Button type="primary" className="primary-btn" onClick={() => router.push("/worker-jobs")}>
                                    View Details
                                </Button>
                            </div>
                        ))
                    )}
                </Card>
            </div>
        </>
    );
}

function RateSummary() {
    return (
        <div style={{ fontSize: "12px", color: "var(--text-light)" }}>
            Based on 24 reviews
        </div>
    );
}
