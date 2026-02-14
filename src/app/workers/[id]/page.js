"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, Button, Rate } from "antd";

export default function WorkerProfile() {
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    // Dummy data (later replace with API)
    const worker = {
        id,
        name: "Rahul Carpenter",
        profession: "Carpenter",
        price: 500,
        rating: 4,
        location: "Mumbai",
        description: "10+ years experience in furniture and door repairs.",
    };

    return (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
            <Card title={worker.name}>
                <p><b>Profession:</b> {worker.profession}</p>
                <p><b>Location:</b> {worker.location}</p>
                <p><b>Price:</b> ₹{worker.price}</p>
                <p><b>Description:</b> {worker.description}</p>
                <Rate disabled defaultValue={worker.rating} />

                <Button
                    type="primary"
                    style={{ marginTop: "20px" }}
                    onClick={() => router.push(`/booking/${worker.id}`)}
                >
                    Book Now
                </Button>
            </Card>
        </div>
    );
}
