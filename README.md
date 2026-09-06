# Snip — URL Shortener

A full-stack MERN URL shortener with custom aliases, link expiration, click tracking, and a dark/light mode UI.

## Features
- Shorten any URL, with optional custom alias
- Optional expiration (auto-disable after N days)
- Click tracking per link
- Soft-delete (hide) links without losing data
- Dark/light theme toggle

## Tech Stack
**Backend:** Node.js, Express, MongoDB, Mongoose, nanoid
**Frontend:** React, Vite, Tailwind CSS, Axios, React Hot Toast, Lucide React

## Setup

### Backend
\`\`\`bash
cd backend
npm install
# create a .env file based on .env.example
npm run dev
\`\`\`


### Frontend
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
