# Mini Task Management System

A full-stack task management application built with **React**, **Node.js**, **Express**, and **MongoDB**. Users can register, log in, and manage tasks with status tracking, priority levels, and search/filter capabilities.

## Links

| | URL |
|---|---|
| **GitHub Repository** | _Add after push — see below_ |
| **Live Demo** | _Add after deploy — see below_ |

## Features

- **User Authentication** — Register & login with JWT tokens
- **Task CRUD** — Create, read, update, and delete tasks
- **Task Status** — Pending, In Progress, Completed
- **Priority Levels** — Low, Medium, High
- **Search & Filter** — Search by title/description, filter by status and priority
- **Responsive UI** — Works on desktop, tablet, and mobile

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18, Vite, React Router, Axios |
| Backend  | Node.js, Express.js                 |
| Database | MongoDB (Mongoose)                  |
| Auth     | JWT (jsonwebtoken + bcryptjs)       |

## Project Structure

```
├── backend/
│   ├── config/         # Database connection
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # User & Task schemas
│   ├── routes/         # Auth & task API routes
│   ├── tests/          # Unit/integration tests
│   ├── app.js          # Express app
│   └── server.js       # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── context/    # Auth context
│   │   └── services/   # API client
│   └── vite.config.js
├── docker-compose.yml  # Docker setup
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local install or [MongoDB Atlas](https://www.mongodb.com/atlas) cloud)
- npm or yarn

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd task-management-system
```

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
```

Start the backend:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

### 3. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## API Endpoints

### Authentication

| Method | Endpoint           | Description       | Auth |
|--------|--------------------|-------------------|------|
| POST   | `/api/auth/register` | Register user   | No   |
| POST   | `/api/auth/login`    | Login user      | No   |
| GET    | `/api/auth/me`       | Get current user| Yes  |

### Tasks

| Method | Endpoint          | Description     | Auth |
|--------|-------------------|-----------------|------|
| GET    | `/api/tasks`      | List tasks      | Yes  |
| GET    | `/api/tasks/:id`  | Get single task | Yes  |
| POST   | `/api/tasks`      | Create task     | Yes  |
| PUT    | `/api/tasks/:id`  | Update task     | Yes  |
| DELETE | `/api/tasks/:id`  | Delete task     | Yes  |

**Query parameters for GET /api/tasks:**
- `search` — Search in title and description
- `status` — Filter by status (Pending, In Progress, Completed)
- `priority` — Filter by priority (Low, Medium, High)

## Running Tests

Make sure MongoDB is running, then:

```bash
cd backend
npm test
```

## Docker Setup

Run the entire stack with Docker Compose:

```bash
docker-compose up --build
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`
- MongoDB: `localhost:27017`

## Deployment

### Backend (Render / Railway)

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com) or [Railway](https://railway.app)
3. Set environment variables: `MONGODB_URI`, `JWT_SECRET`, `PORT`
4. Use [MongoDB Atlas](https://www.mongodb.com/atlas) for the database

### Frontend (Vercel / Netlify)

1. Deploy the `frontend` folder
2. Set environment variable: `VITE_API_URL=https://your-backend-url/api`
3. Build command: `npm run build`
4. Output directory: `dist`

## Environment Variables

### Backend

| Variable         | Description              | Default                              |
|------------------|--------------------------|--------------------------------------|
| `PORT`           | Server port              | `5000`                               |
| `MONGODB_URI`    | MongoDB connection string| `mongodb://localhost:27017/taskmanager` |
| `JWT_SECRET`     | JWT signing secret       | —                                    |
| `JWT_EXPIRES_IN` | Token expiry             | `7d`                                 |

### Frontend

| Variable       | Description  | Default |
|----------------|--------------|---------|
| `VITE_API_URL` | Backend API URL | `/api` (proxied in dev) |

## License

MIT
