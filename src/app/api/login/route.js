import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    // Dummy user check
    if (email === "admin@test.com" && password === "123456") {
        return NextResponse.json({ success: true, workerId: 1 });
    }

    return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
    );
}
