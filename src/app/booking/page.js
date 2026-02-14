"use client";
import Navbar from "@/components/Navbar";
import { DatePicker, Button, message } from "antd";
import { useRouter } from "next/navigation";

export default function Booking() {
    const router = useRouter();
    const handleBooking = () => {
        // Mock booking process
        const bookingId = Math.floor(Math.random() * 10000);
        message.success("Booking Confirmed!");
        router.push(`/booking/${bookingId}`);
    };

    return (
        <>
            <Navbar />
            <div style={{
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }} className="fade-in">
                <div style={{
                    background: "white",
                    padding: "60px",
                    borderRadius: "32px",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    maxWidth: "500px",
                    width: "100%"
                }}>
                    <h1 style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "var(--text-dark)"
                    }}>
                        Book a Worker
                    </h1>
                    <p style={{ color: "var(--text-light)", marginBottom: "32px" }}>
                        Select a date to schedule your service.
                    </p>

                    <DatePicker
                        style={{
                            width: "100%",
                            height: "50px",
                            borderRadius: "12px",
                            marginBottom: "32px",
                            border: "2px solid #EEE"
                        }}
                    />

                    <Button
                        size="large"
                        className="primary-btn"
                        onClick={handleBooking}
                        style={{ width: "100%", height: "56px", fontSize: "18px" }}
                    >
                        Confirm Booking
                    </Button>
                </div>
            </div>
        </>
    );
}
