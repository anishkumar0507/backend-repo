# YouTube Integration Setup Guide

This guide will help you set up the YouTube integration for HealthBook.

## Prerequisites

1. A YouTube Data API v3 key
2. Your YouTube Channel ID: `UCCGx9uf-5jBRYqQK4eImh`

## Getting a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

## Installation

1. Install dependencies:
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following:

```env
# YouTube API Configuration
YOUTUBE_API_KEY=your_youtube_api_key_here
CHANNEL_ID=UCCGx9uf-5jBRYqQK4eImh

# Server Configuration
PORT=3001

# Frontend API URL (optional, defaults to http://localhost:3001)
VITE_API_URL=http://localhost:3001
```

Replace `your_youtube_api_key_here` with your actual YouTube API key.

## Running the Application

### Development Mode (Frontend + Backend)

Run both the backend server and frontend development server:

```bash
npm run dev:all
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend dev server on `http://localhost:3000`

### Running Separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run dev
```

## How It Works

1. **Backend API** (`server/index.ts`):
   - Fetches latest 12 videos from your YouTube channel
   - Gets video durations using YouTube Data API v3
   - Classifies videos:
     - **Long videos**: duration > 60 seconds
     - **Shorts**: duration ≤ 60 seconds
   - Returns processed data:
     - `featured`: First latest long video
     - `longVideos`: Remaining long videos
     - `shorts`: All shorts

2. **Frontend Components**:
   - `YouTubeSection`: Displays featured video + remaining long videos
   - `ShortsSection`: Displays YouTube Shorts

## API Endpoint

The backend exposes one endpoint:

- `GET /api/youtube/videos`
  - Returns processed video data
  - Response format:
    ```json
    {
      "featured": {
        "videoId": "...",
        "title": "...",
        "thumbnail": "...",
        "publishedAt": "...",
        "durationInSeconds": 300
      },
      "longVideos": [...],
      "shorts": [...]
    }
    ```

## Error Handling

- If the API key or channel ID is missing, the backend will return an error
- If videos fail to load, the frontend will show an error message
- The UI gracefully handles empty states

## Production Deployment

For production:

1. Set environment variables on your hosting platform
2. Update `VITE_API_URL` to point to your production backend URL
3. Build the frontend: `npm run build`
4. Deploy both frontend and backend

## Notes

- The system fetches the latest 12 videos from your channel
- Videos are automatically classified by duration
- Clicking any video opens it on YouTube in a new tab
- The UI structure remains unchanged - only data is dynamic
