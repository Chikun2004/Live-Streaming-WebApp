# Live Streaming Platform

A complete live streaming platform built with Node.js, RTMP Server, and web-based player. This project demonstrates the implementation of a live streaming server that can receive RTMP streams (e.g., from OBS Studio) and serve them to viewers through a web interface.

## Features

- RTMP Server for receiving live streams
- HLS video delivery for web playback
- Real-time stream status monitoring
- Responsive web interface
- Compatible with OBS Studio and other RTMP streaming software

## Prerequisites

- Node.js (v14 or higher)
- FFmpeg installed on your system
- OBS Studio (for streaming)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

## Usage

### Setting up OBS Studio

1. Open OBS Studio
2. Go to Settings > Stream
3. Select "Custom" as the streaming service
4. Set the following:
   - Server: rtmp://localhost:1935/live
   - Stream Key: stream

### Viewing the Stream

1. Open your web browser
2. Navigate to `http://localhost:3000`
3. The stream will automatically play when it becomes available

## Technical Details

- RTMP Server runs on port 1935
- HTTP Server (for HLS) runs on port 8000
- Web interface runs on port 3000
- Uses node-media-server for RTMP handling
- Video.js for web playback
- HLS (HTTP Live Streaming) for web delivery

## Project Structure

```
live-streaming-app/
├── app.js              # Main server file
├── public/
│   ├── index.html     # Web interface
│   ├── styles.css     # Styling
│   └── app.js         # Frontend JavaScript
├── media/             # Stream storage (created automatically)
└── package.json
```

## Contributing

Feel free to submit issues and enhancement requests!
