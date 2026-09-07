# 🔗 Snip — URL Shortener

A full-stack MERN application for shortening long URLs into shareable links, with custom aliases, link expiration, click analytics, and a dark/light mode interface.

## ✨ Features

- **Instant URL shortening** — paste any long URL and get a short, shareable link
- **Custom aliases** — choose your own short code instead of a random one
- **Link expiration** — set links to auto-expire after a chosen number of days
- **Click tracking** — every visit to a short link increments its click count
- **Soft delete** — hide links from your view without permanently losing the record
- **Dark / light mode** — theme toggle with saved preference across visits
- **Toast notifications** — instant feedback on every action, no jarring browser alerts

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
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
url-shortener/
├── backend/ # Express API + MongoDB models
└── frontend/ # React + Vite client

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A MongoDB connection string (local or Atlas)

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
| `GET` | `/api/urls` | Get all (non-hidden) URLs |
| `PATCH` | `/api/urls/:id/hide` | Hide a URL (soft delete) |
| `GET` | `/:shortCode` | Redirect to the original URL |

## 🖼️ Preview

*(Add a screenshot or GIF of the app here once ready — this is one of the first things recruiters look at)*

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Syed Shaheer Ahmed**
- GitHub: [@devshaheerx](https://github.com/devshaheerx)
- LinkedIn: [syedshaheerahmed](https://linkedin.com/in/syedshaheerahmed)
