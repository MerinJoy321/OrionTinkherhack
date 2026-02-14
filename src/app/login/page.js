"use client";
import { Form, Input, Button, message } from "antd";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const onFinish = async (values) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.ok) {
                message.success("Login successful");
                const role = localStorage.getItem("userRole");
                if (role === "worker") {
                    router.push("/worker-dashboard");
                } else if (role === "client") {
                    router.push("/home");
                } else {
                    router.push("/");
                }
            } else {
                message.error(data.message || "Login failed");
            }
        } catch (error) {
            message.error("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div style={{
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(180deg, var(--bg-white) 0%, var(--bg-gray) 100%)"
            }} className="fade-in">
                <div style={{
                    padding: "40px",
                    width: "100%",
                    maxWidth: "400px",
                    background: "white",
                    borderRadius: "24px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.05)"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        marginBottom: "32px",
                        color: "var(--primary-blue)",
                        fontWeight: "700"
                    }}>
                        Welcome Back
                    </h1>

                    <Form onFinish={onFinish} layout="vertical">
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                placeholder="Email"
                                size="large"
                                style={{ borderRadius: "12px", height: "50px" }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder="Password"
                                size="large"
                                style={{ borderRadius: "12px", height: "50px" }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                block
                                className="primary-btn"
                                size="large"
                                style={{ height: "50px", fontSize: "16px", marginTop: "16px" }}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}
