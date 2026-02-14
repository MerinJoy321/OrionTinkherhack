"use client";
import { useState, useEffect } from "react";
import { Input, Button, Spin, Card, message } from "antd";
import { RobotOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { aiService } from "@/services/aiService";

const { TextArea } = Input;

export default function AIChat() {
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    const [problem, setProblem] = useState("");
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        if (!problem.trim()) {
            message.warning("Please describe your problem first.");
            return;
        }

        setAnalyzing(true);
        setResult(null);

        try {
            const data = await aiService.predictCategory(problem);
            setAnalyzing(false);

            const skill = data.predicted_category;

            setResult({
                skill,
                message: `Based on your description, it looks like you need a ${skill}.`
            });
        } catch (error) {
            setAnalyzing(false);
            message.error("Failed to analyze problem. Please make sure the AI server is running.");
            console.error(error);
        }
    };

    const handleProceed = () => {
        router.push(`/worker-list?skill=${result.skill}`);
    };

    return (
        <>
            <Navbar />
            <div style={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px",
                background: "var(--bg-white)"
            }} className="fade-in">

                <div style={{
                    maxWidth: "600px",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <div style={{
                        width: "80px",
                        height: "80px",
                        background: "var(--accent-light)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        color: "var(--primary-blue)",
                        fontSize: "32px"
                    }}>
                        <RobotOutlined />
                    </div>

                    <h1 style={{ marginBottom: "10px", color: "var(--primary-blue)" }}>AI Assistant</h1>
                    <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>
                        Describe your issue, and our AI will match you with the right expert.
                    </p>

                    <Card style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                        <TextArea
                            rows={4}
                            placeholder="e.g., My kitchen sink is leaking..."
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            style={{ borderRadius: "10px", marginBottom: "20px", fontSize: "16px" }}
                        />

                        {analyzing ? (
                            <div style={{ padding: "20px" }}>
                                <Spin description="Analyzing your request..." />
                            </div>
                        ) : result ? (
                            <div className="fade-in" style={{
                                background: "var(--bg-gray)",
                                padding: "20px",
                                borderRadius: "10px",
                                marginBottom: "20px",
                                textAlign: "left"
                            }}>
                                <h3 style={{ margin: "0 0 10px", color: "var(--text-dark)" }}>Analysis Complete</h3>
                                <p style={{ fontSize: "16px", marginBottom: "15px" }}>{result.message}</p>
                                <Button
                                    type="primary"
                                    className="primary-btn"
                                    block
                                    icon={<ArrowRightOutlined />}
                                    onClick={handleProceed}
                                    style={{ height: "45px" }}
                                >
                                    Find {result.skill}s Nearby
                                </Button>
                            </div>
                        ) : (
                            <Button
                                type="primary"
                                className="primary-btn"
                                block
                                onClick={handleAnalyze}
                                style={{ height: "45px", fontSize: "16px" }}
                            >
                                Analyze Problem
                            </Button>
                        )}
                    </Card>
                </div>
            </div>
        </>
    );
}
