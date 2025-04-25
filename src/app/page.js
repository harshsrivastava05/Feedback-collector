// app/page.js
"use client";

import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';


export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [feedbackCount, setFeedbackCount] = useState(0);

  // Update feedback count when admin view is toggled
  const handleFeedbackUpdate = () => {
    setFeedbackCount(feedbackCount + 1);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Feedback Collector</h1>
          <ThemeToggle />
        </div>
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          {showAdmin ? "Back to Form" : "View Submitted Feedback"}
        </button>
      </header>

      <main className="transition-opacity duration-300 ease-in-out">
        <div className={`transition-all ${showAdmin ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <FeedbackForm onSubmitSuccess={handleFeedbackUpdate} />
        </div>
        
        <div className={`transition-all ${!showAdmin ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <FeedbackList />
        </div>
      </main>

      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © 2025 Feedback Collector - Created by Harsh srivastava
        </p>
      </footer>
    </div>
  );
}