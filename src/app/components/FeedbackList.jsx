"use client";

import { useState, useEffect } from "react";

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch('/api/feedbacks');

                if (!response.ok) {
                    throw new Error('Failed to fetch feedbacks');
                }

                const data = await response.json();
                setFeedbacks(data);
            } catch (err) {
                console.error("Error fetching feedbacks:", err);
                setError("Failed to load feedback entries. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
            </div>
        );
    }

    if (feedbacks.length === 0) {
        return (
            <div className="p-6 text-center bg-gray-50 rounded-lg dark:bg-gray-700">
                <p className="text-gray-600 dark:text-gray-300">No feedback submissions yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Submitted Feedback</h2>

            {feedbacks.map((feedback) => (
                <div
                    key={feedback._id}
                    className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{feedback.fullName}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(feedback.timestamp).toLocaleString()}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{feedback.email}</p>
                    <p className="text-gray-700 dark:text-gray-200">{feedback.message}</p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;