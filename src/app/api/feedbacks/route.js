// app/api/feedbacks/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("feedbackCollector");

    // Get all feedbacks, sorted by timestamp (newest first)
    const feedbacks = await db
      .collection("feedbacks")
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
