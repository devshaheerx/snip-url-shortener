# 🔗 Snip — URL Shortener

A full-stack MERN application for shortening long URLs into shareable links, with custom aliases, link expiration, click tracking, and a fully responsive dark/light mode interface.

## ✨ Features

- **Instant URL shortening** — paste any long URL and get a short, shareable link
- **Custom aliases** — choose your own short code instead of a random one
- **Link expiration** — set links to auto-expire after a chosen number of days
- **Click tracking** — every visit to a short link increments its click count
- **Delete links** — remove links permanently with an inline confirm (no browser popups)
- **Dark / light mode** — theme toggle with saved preference across visits, each mode with its own distinct color palette
- **Fully responsive** — works cleanly from mobile (375px) up to desktop
- **Toast notifications** — instant feedback on every action

## 🌐 Live Demo

- **App:** [snip-frontend.vercel.app](https://snip-frontend-gamma.vercel.app/)
- **API:** [snip-backend.vercel.app/api/urls](https://snip-backend.vercel.app/api/urls)

Note: the backend runs on Vercel's free serverless tier. The first request after inactivity may take a few seconds to respond.

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS v4
- React Router DOM
- Axios
- React Hot Toast
- Lucide React (icons)

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- Nanoid (short code generation)
- Morgan (request logging)
- CORS + dotenv

## 📁 Project Structure
```
url-shortener/
├── backend/ # Express API + MongoDB models
└── frontend/ # React + Vite client
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A MongoDB connection string (MongoDB Atlas recommended)

### Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` based on `.env.example`:
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run the server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`, connecting to the API at `http://localhost:5000`.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/urls` | Create a new short URL |
| `GET` | `/api/urls` | Get all URLs |
| `DELETE` | `/api/urls/:id` | Permanently delete a URL |
| `GET` | `/:shortCode` | Redirect to the original URL |

## 🖼️ Preview

<img width="1903" height="893" alt="image" src="https://github.com/user-attachments/assets/4df6312f-0caa-4fac-9a2b-1ba616a64ba0" />

<img width="1905" height="887" alt="image" src="https://github.com/user-attachments/assets/1c7189ac-024e-48a6-84a5-0e88bac41f8a" />

## 👤 Author

**Syed Shaheer Ahmed**
- GitHub: [@devshaheerx](https://github.com/devshaheerx)
- LinkedIn: [syedshaheerahmed](https://www.linkedin.com/in/syed-shaheer-ahmed-505a64332/)
