"use client";

import { useParams, useRouter } from "next/navigation";
import { DatePicker, TimePicker, Button, message, Radio } from "antd";
import { useState, useEffect } from "react";

export default function BookingPage() {
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [payment, setPayment] = useState("cash");

    const handleBooking = () => {
        if (!date || !time) {
            message.error("Please select date and time");
            return;
        }

        message.success("Booking Confirmed!");
        router.push(`/rating/${id}`);
    };

    return (
        <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
            <h2>Book Worker</h2>

            <DatePicker
                style={{ width: "100%", marginBottom: "20px" }}
                onChange={(value) => setDate(value)}
            />

            <TimePicker
                style={{ width: "100%", marginBottom: "20px" }}
                onChange={(value) => setTime(value)}
            />

            <div style={{ marginBottom: "20px" }}>
                <p style={{ fontWeight: "600", marginBottom: "10px" }}>Payment Method:</p>
                <Radio.Group onChange={(e) => setPayment(e.target.value)} value={payment}>
                    <Radio value="cash">Cash after Service</Radio>
                    <Radio value="online">Online Payment</Radio>
                </Radio.Group>
            </div>

            <Button type="primary" block onClick={handleBooking}>
                Confirm Booking
            </Button>
        </div>
    );
}
