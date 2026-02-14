"use client";

import { useParams, useRouter } from "next/navigation";
import { Rate, Input, Button, message } from "antd";
import { useState, useEffect } from "react";

const { TextArea } = Input;

export default function RatingPage() {
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = () => {
        if (rating === 0) {
            message.error("Please give a rating");
            return;
        }

        message.success("Thank you for your feedback!");
        router.push("/");
    };

    return (
        <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
            <h2>Rate Worker</h2>

            <Rate onChange={(value) => setRating(value)} />

            <TextArea
                rows={4}
                placeholder="Write your review..."
                style={{ marginTop: "20px" }}
                onChange={(e) => setReview(e.target.value)}
            />

            <Button
                type="primary"
                block
                style={{ marginTop: "20px" }}
                onClick={handleSubmit}
            >
                Submit Rating
            </Button>
        </div>
    );
}
