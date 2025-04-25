import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, message, timestamp } = body;
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("feedbackCollector");

    await db.collection("feedbacks").insertOne({
      fullName,
      email,
      message,
      timestamp: timestamp || new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

