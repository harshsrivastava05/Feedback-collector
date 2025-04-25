# Feedback Collector

A simple yet elegant feedback collection application built with Next.js that allows users to submit feedback and view previously submitted entries through an admin interface.

## Features

- **User-friendly feedback submission form**
  - Name, email, and message fields with validation
  - Loading state on submission
  - Confirmation feedback

- **Admin view**
  - Toggle to access all submitted feedback
  - Clean presentation of feedback entries
  - Timestamp for each submission

- **Technical highlights**
  - Responsive design for all device sizes
  - Built with Next.js and Tailwind CSS
  - Serverless API routes for backend functionality
  - Data persistence using MongoDB

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn package manager
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/harshsrivastava05/Feedback-collector.git
   cd feedback-collector
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
feedback-collector/
├── app/
│   ├── api/
│   │   ├── feedbacks/
│   │   │   └── route.js
│   │   ├── submit-feedback/
│   │   │   └── route.js
│   ├── components/
│   │   ├── FeedbackForm.jsx
│   │   ├── FeedbackList.jsx
│   │   └── ThemeToggle.jsx
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── lib/
│   └── mongodb.js
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.js
└── README.md
```

## API Routes

- **POST /api/submit-feedback**: Accepts and stores new feedback submissions
- **GET /api/feedbacks**: Returns all feedback entries for admin view

## Database Schema

The MongoDB collection stores feedback entries with the following schema:

```javascript
{
  "_id": ObjectId,
  "fullName": String,
  "email": String,
  "message": String,
  "timestamp": Date
}
```

## Deployment

This project is set up for easy deployment on Netlify:

1. Push your repository to GitHub
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `.next`
4. Set up environment variables in the Netlify dashboard
5. Deploy!

## Database Setup

1. Create a MongoDB Atlas account and cluster (or use a local MongoDB instance)
2. Create a database named `feedback-collector` 
3. Create a collection named `feedbacks` with the schema described above
4. Obtain your MongoDB connection string and add it to your environment variables

## Local Development

To run the project locally:

```bash
# Development mode with hot reload
npm run dev

# Build the project
npm run build

# Start the production server
npm start
```

## License

MIT

## Author

Harsh srivastava

---

*This feedback collector was created as part of a coding assessment.*