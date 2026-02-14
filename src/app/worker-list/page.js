"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Select, Radio, Empty } from "antd";
import Navbar from "@/components/Navbar";
import WorkerCard from "@/components/WorkerCard";
import { getWorkers } from "@/services/api";

const { Option } = Select;

function WorkerListContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const skillQuery = searchParams.get("skill") || "All";

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    const [workers, setWorkers] = useState([]);
    const [sortBy, setSortBy] = useState("distance");

    useEffect(() => {
        let allWorkers = getWorkers();

        // Filter by skill
        if (skillQuery !== "All" && skillQuery !== "General Help") {
            allWorkers = allWorkers.filter(w => w.skill.toLowerCase() === skillQuery.toLowerCase());
        }

        // Apply Sorting
        const sorted = [...allWorkers].sort((a, b) => {
            if (sortBy === "distance") return a.distance - b.distance;
            if (sortBy === "rating") return b.rating - a.rating; // High to Low
            if (sortBy === "price") return a.rate - b.rate; // Low to High
            if (sortBy === "availability") return (a.available === b.available) ? 0 : a.available ? -1 : 1;
            return 0;
        });

        setWorkers(sorted);
    }, [skillQuery, sortBy]);

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }} className="fade-in">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "20px"
            }}>
                <div>
                    <h1 style={{ margin: "0 0 10px", color: "var(--primary-blue)" }}>
                        {skillQuery !== "All" ? `${skillQuery}s Near You` : "Available Workers"}
                    </h1>
                    <p style={{ color: "var(--text-light)", margin: 0 }}>Found {workers.length} professionals</p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <span style={{ fontWeight: "600", color: "var(--text-dark)" }}>Sort By:</span>
                    <Select
                        defaultValue="distance"
                        style={{ width: 140 }}
                        onChange={(value) => setSortBy(value)}
                    >
                        <Option value="distance">Distance</Option>
                        <Option value="rating">Rating</Option>
                        <Option value="price">Price (Low)</Option>
                        <Option value="availability">Availability</Option>
                    </Select>
                </div>
            </div>

            {workers.length > 0 ? (
                <div style={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {workers.map((worker) => (
                        <WorkerCard key={worker.id} worker={worker} />
                    ))}
                </div>
            ) : (
                <div style={{ padding: "60px 0" }}>
                    <Empty description={`No ${skillQuery}s found nearby.`} />
                </div>
            )}
        </div>
    );
}

export default function WorkerList() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>}>
                <WorkerListContent />
            </Suspense>
        </>
    );
}
