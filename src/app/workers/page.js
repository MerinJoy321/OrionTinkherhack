"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WorkerCard from '@/components/WorkerCard';
import { getWorkers } from '@/services/api';

export default function WorkersPage() {
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role !== "client") {
            router.push("/login");
        }
    }, [router]);

    const workers = getWorkers();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Available Workers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workers.map((worker) => (
                    <WorkerCard key={worker.id} worker={worker} />
                ))}
            </div>
        </div>
    );
}
