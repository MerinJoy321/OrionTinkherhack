"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, Form, Input, InputNumber, Select, Tag } from "antd";
import Navbar from "@/components/Navbar";

const { TextArea } = Input;

export default function WorkerProfilePage() {
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "worker") {
            router.push("/login");
        }
    }, [router]);

    const onFinish = (values) => {
        console.log("Profile updated:", values);
    };

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }} className="fade-in">
                <Button onClick={() => router.back()} style={{ marginBottom: "20px" }}>Back to Dashboard</Button>

                <h1 style={{ color: "var(--primary-blue)", marginBottom: "30px" }}>Your Profile</h1>

                <Card style={{ borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                    <Form layout="vertical" onFinish={onFinish} initialValues={{ name: "Rahul Kumar", skill: "Carpenter", exp: 5, rate: 400 }}>
                        <Form.Item name="name" label="Full Name">
                            <Input size="large" style={{ borderRadius: "10px" }} />
                        </Form.Item>

                        <Form.Item name="skill" label="Skill/Profession">
                            <Select size="large" style={{ borderRadius: "10px" }}>
                                <Select.Option value="Carpenter">Carpenter</Select.Option>
                                <Select.Option value="Plumber">Plumber</Select.Option>
                                <Select.Option value="Electrician">Electrician</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="exp" label="Years of Experience">
                            <InputNumber min={0} size="large" style={{ width: "100%", borderRadius: "10px" }} />
                        </Form.Item>

                        <Form.Item name="rate" label="Daily Rate (₹)">
                            <InputNumber min={0} size="large" style={{ width: "100%", borderRadius: "10px" }} />
                        </Form.Item>

                        <Form.Item name="bio" label="About Me">
                            <TextArea rows={4} style={{ borderRadius: "10px" }} />
                        </Form.Item>

                        <Button type="primary" block className="primary-btn" size="large" htmlType="submit" style={{ height: "45px" }}>
                            Save Changes
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    );
}
