// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Feedback Collector",
  description: "A simple application to collect and manage user feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
